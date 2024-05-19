package org.example.backend.service;



import org.example.backend.dto.SaveNewOperationRequest;
import org.example.backend.entity.Doctor;
import org.example.backend.entity.Role;
import org.example.backend.entity.User;
import org.example.backend.handler.WrongUserNameOrPasswordException;
import org.example.backend.mapping.MapUserAndSaveNewOperationRequest;
import org.example.backend.repo.DoctorRepo;
import org.example.backend.repo.PatientRepo;
import org.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    @Autowired
    MapUserAndSaveNewOperationRequest mapper;
    @Autowired
    RoleService roleService;

    @Autowired
    DepartmentService departmentService;

    @Autowired
    BCryptPasswordEncoder byBCryptPasswordEncoder;
    @Autowired
    private KeyGenerationService keyGenerationService;
    @Autowired
    private DoctorRepo doctorRepo;
    @Autowired
    PatientRepo patientRepo;
    @Autowired
    private ABEService abeService;

    public Optional<User> findUserByEmail(String email) throws WrongUserNameOrPasswordException {
        return userRepo.findUserByEmailAndIsActive(email, Boolean.TRUE);
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public List<User> getAllOperationalUsers() {
        return userRepo.findByIsActiveAndRoleIdIsNot(Boolean.TRUE, 1L);
    }

    @Transactional
    public User saveNewOperationUser(SaveNewOperationRequest saveNewOperationRequest) throws Exception {
        User user = new User();
        user.setRole(roleService.findById(saveNewOperationRequest.getRoleId()));
        user.setPassword(byBCryptPasswordEncoder.encode("123456789"));
        user.setIsActive(Boolean.TRUE);
        user.setDepartment(departmentService.findById(saveNewOperationRequest.getDepId()));
        mapper.MapSaveNewOperationRequestIntoUser(saveNewOperationRequest, user);
        user = userRepo.save(user);
        if(user.getRole().getName().equals("Doctor")){
            if(user.getDepartment().getDepartmentName().equals("Cardiology")){
            String new_file = "D:/thesis_check/back-end/src/main/java/org/example/backend/service/Demo/"+"Doctor"+user.getName();
            Doctor doctor = Doctor.builder()
                    .user(user)
                    .build();
            doctor.appendAttributes("Dep:Cardiology");
            doctor.setPrv_file(new_file);
            System.out.println(doctor.getPrv_file());
            doctor.setPrv_key(keyGenerationService.keygen(new_file, doctor.getDoctorAttributes()));
            System.out.println("doctor.getDoctorAttributes()");
            System.out.println(doctor.getDoctorAttributes());
            doctorRepo.save(doctor);
        }
        else if(user.getDepartment().getDepartmentName().equals("Neurology"))
        {
            String new_file = "D:/thesis_check/back-end/src/main/java/org/example/backend/service/Demo/"+"Doctor"+user.getName();
            Doctor doctor = Doctor.builder()
                    .user(user)
                    .build();
            doctor.appendAttributes("Dep:Neurology");
            doctor.setPrv_file(new_file);
            System.out.println(doctor.getPrv_file());
            doctor.setPrv_key(keyGenerationService.keygen(new_file, doctor.getDoctorAttributes()));
            System.out.println("doctor.getDoctorAttributes()");
            System.out.println(doctor.getDoctorAttributes());
            doctorRepo.save(doctor);
        }
    }
        return user;
    }

    public User editOperationalUser(Long id, SaveNewOperationRequest saveNewOperationRequest) throws Exception {
        User user = findById(id);
        Role role = roleService.findById(saveNewOperationRequest.getRoleId());
        mapper.MapSaveNewOperationRequestIntoUser(saveNewOperationRequest, user);

        return userRepo.save(user);
    }

    public User findById(Long id) throws Exception {
        return userRepo.findById(id).orElseThrow(()-> new Exception("There Is No User With This Id"));
    }

    public User deActivateOperationUser(Long id) throws Exception {
        User user = findById(id);
        user.setIsActive(false);
        return userRepo.save(user);
    }

    public List<User> findAllByIds(List<Long> ids){
        return userRepo.findAllById(ids);
    }

    public Map<String, Long> getProviderDashboard() throws Exception {
        Map<String, Long> dashboardData = new HashMap<>();
        Role role = roleService.findByName("Doctor");
        dashboardData.put("doctors", userRepo.countByRoleId(role.getId()));
        role = roleService.findByName("Nurse");
        dashboardData.put("nurses", userRepo.countByRoleId(role.getId()));
        dashboardData.put("patients", patientRepo.count());
        return dashboardData;
    }

    public List findByType(String type) {
        List userTypes = null;
        if(type.toLowerCase().equals("doctor") || type.toLowerCase().equals("nurse")){
            userTypes = userRepo.findByRoleNameIgnoreCase(type);
        }
        return userTypes;
    }
}

