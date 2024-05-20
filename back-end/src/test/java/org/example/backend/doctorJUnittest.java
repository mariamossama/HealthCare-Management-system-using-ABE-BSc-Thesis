package org.example.backend;

import org.example.backend.dto.SaveNewOperationRequest;
import org.example.backend.entity.Department;
import org.example.backend.entity.Role;
import org.example.backend.entity.User;
import org.example.backend.handler.WrongUserNameOrPasswordException;
import org.example.backend.mapping.MapUserAndSaveNewOperationRequest;
import org.example.backend.repo.DoctorRepo;
import org.example.backend.repo.PatientRepo;
import org.example.backend.repo.UserRepo;
import org.example.backend.service.DepartmentService;
import org.example.backend.service.KeyGenerationService;
import org.example.backend.service.RoleService;
import org.example.backend.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import io.jsonwebtoken.lang.Arrays;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepo userRepo;

    @Mock
    private MapUserAndSaveNewOperationRequest mapper;

    @Mock
    private RoleService roleService;

    @Mock
    private DepartmentService departmentService;

    @Mock
    private BCryptPasswordEncoder byBCryptPasswordEncoder;

    @Mock
    private KeyGenerationService keyGenerationService;

    @Mock
    private DoctorRepo doctorRepo;

    @Mock
    private PatientRepo patientRepo;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindUserByEmail_UserExists() throws WrongUserNameOrPasswordException {
        String email = "test@example.com";
        User user = new User();
        when(userRepo.findUserByEmailAndIsActive(email, Boolean.TRUE)).thenReturn(Optional.of(user));

        Optional<User> result = userService.findUserByEmail(email);

        assertTrue(result.isPresent());
        assertEquals(user, result.get());
    }

    @Test
    void testFindUserByEmail_UserNotFound() throws WrongUserNameOrPasswordException {
        String email = "test@example.com";
        when(userRepo.findUserByEmailAndIsActive(email, Boolean.TRUE)).thenReturn(Optional.empty());

        Optional<User> result = userService.findUserByEmail(email);

        assertFalse(result.isPresent());
    }

    @Test
    void testSave_User() {
        User user = new User();
        when(userRepo.save(user)).thenReturn(user);

        User result = userService.save(user);

        assertEquals(user, result);
    }

    @Test
    void testGetAllOperationalUsers() {
        List<User> users = new ArrayList<>();
        User user1 = new User();
        Role role = new Role();
        role.setName("Doctor");
        user1.setRole(role);
        users.add(user1);
        when(userRepo.findByIsActiveAndRoleIdIsNot(Boolean.TRUE, 1L)).thenReturn(users);

        List<User> result = userService.getAllOperationalUsers();

        assertEquals(users, result);
    }

    @Test
    void testSaveNewOperationUser() throws Exception {
        SaveNewOperationRequest request = new SaveNewOperationRequest();
        request.setRoleId(2L);
        request.setDepId(1L);
        Role role = new Role();
        role.setName("Doctor");
        when(roleService.findById(request.getRoleId())).thenReturn(role);
        when(departmentService.findById(request.getDepId())).thenReturn(new Department());
        when(userRepo.save(any(User.class))).thenReturn(new User());
        doNothing().when(mapper).MapSaveNewOperationRequestIntoUser(any(SaveNewOperationRequest.class), any(User.class));

        User result = userService.saveNewOperationUser(request);

        assertNotNull(result);
        verify(userRepo, times(1)).save(any(User.class));
    }

    @Test
    void testEditOperationalUser() throws Exception {
        Long id = 1L;
        SaveNewOperationRequest request = new SaveNewOperationRequest();
        request.setRoleId(1L);
        User user = new User();
        Role role = new Role();
        when(userRepo.findById(id)).thenReturn(Optional.of(user));
        when(roleService.findById(request.getRoleId())).thenReturn(role);
        when(userRepo.save(any(User.class))).thenReturn(user);

        User result = userService.editOperationalUser(id, request);

        assertEquals(user, result);
        verify(mapper, times(1)).MapSaveNewOperationRequestIntoUser(any(SaveNewOperationRequest.class), any(User.class));
        verify(userRepo, times(1)).save(user);
    }

    @Test
    void testFindById_UserExists() throws Exception {
        Long id = 1L;
        User user = new User();
        when(userRepo.findById(id)).thenReturn(Optional.of(user));

        User result = userService.findById(id);

        assertEquals(user, result);
    }

    @Test
    void testFindById_UserNotFound() {
        Long id = 1L;
        when(userRepo.findById(id)).thenReturn(Optional.empty());

        Exception exception = assertThrows(Exception.class, () -> {
            userService.findById(id);
        });

        assertEquals("There Is No User With This Id", exception.getMessage());
    }

    @Test
    void testDeActivateOperationUser() throws Exception {
        Long id = 1L;
        User user = new User();
        when(userRepo.findById(id)).thenReturn(Optional.of(user));
        when(userRepo.save(any(User.class))).thenReturn(user);

        User result = userService.deActivateOperationUser(id);

        assertFalse(result.getIsActive());
        verify(userRepo, times(1)).save(user);
    }


    @Test
    void testGetProviderDashboard() throws Exception {
        Map<String, Long> dashboardData = new HashMap<>();
        Role doctorRole = new Role();
        doctorRole.setName("Doctor");
        doctorRole.setId(1L);
        when(roleService.findByName("Doctor")).thenReturn(doctorRole);
        when(userRepo.countByRoleId(doctorRole.getId())).thenReturn(10L);

        Role nurseRole = new Role();
        nurseRole.setName("Nurse");
        nurseRole.setId(2L);
        when(roleService.findByName("Nurse")).thenReturn(nurseRole);
        when(userRepo.countByRoleId(nurseRole.getId())).thenReturn(5L);
        when(patientRepo.count()).thenReturn(20L);

        Map<String, Long> result = userService.getProviderDashboard();

        assertEquals(10L, result.get("doctors"));
        assertEquals(5L, result.get("nurses"));
        assertEquals(20L, result.get("patients"));
    }

    @Test
    void testFindByType() {
        String type = "Doctor";
        List<User> users = new ArrayList<>();
        when(userRepo.findByRoleNameIgnoreCase(type)).thenReturn(users);

        List result = userService.findByType(type);

        assertEquals(users, result);
    }
}
