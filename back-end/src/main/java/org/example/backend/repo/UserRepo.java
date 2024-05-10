package org.example.backend.repo;

import org.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findUserByEmailAndIsActive(String email, Boolean isActive);
    List<User> findByIsActiveAndRoleIdIsNot(Boolean isActive, Long roleId);

    List<User> findByRoleId(Long roleId);
    List<User> findByRoleNameIgnoreCase(String name);

    Long countByRoleId(Long id);
}
