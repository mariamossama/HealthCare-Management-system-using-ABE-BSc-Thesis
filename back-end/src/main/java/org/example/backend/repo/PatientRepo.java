package org.example.backend.repo;

import org.example.backend.dto.PatientResponse;
import org.example.backend.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {

    @Query("SELECT new org.example.backend.dto.PatientResponse(CONCAT(p.firstName, ' ', p.lastName), p.dateOfBirth) from Patient p")
    List<PatientResponse> findAllProjected();
}
