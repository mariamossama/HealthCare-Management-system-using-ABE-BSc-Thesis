package org.example.backend.repo;

import org.example.backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role> findByIdIsNotIn(List<Long> ids);

    Optional<Role> findByName(String name);
    Long countByName(String name);
}
