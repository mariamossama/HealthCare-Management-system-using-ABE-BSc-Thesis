package org.example.backend.repo;

import org.example.backend.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByUserId(Long id);

    List<Doctor> findAllByUserIdIn(List<Long> doctorIds);
}
