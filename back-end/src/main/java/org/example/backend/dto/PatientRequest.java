package org.example.backend.dto;

import java.util.List;

import org.example.backend.annotation.EntityExists;
import org.example.backend.entity.Gender;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Builder
public class PatientRequest {

    private Long id;
    
    @NotNull(message = "The First Name Is Required")
    private String firstName;

    @NotNull(message = "The Last Name Is Required")
    private String lastName;

    @NotNull(message = "The Date Of Birth Is Required")
    private String dateOfBirth;

    @NotNull(message = "The Doctor Is Required")
    private List<Long> doctorIds;

    @NotNull(message = "The Nurse Is Required")
    private List<Long> nurseIds;

    @NotNull(message = "The Gender Is Required")
    @EntityExists(entityClass = Gender.class,
    message = "There Is No Gender With This Id",
    propertyName = "id")
    private Long genderId;

    @NotNull(message = "The Medical History Is Required")
    private String medicalHistory;

    
    @NotNull(message = "The Symptoms Is Required")
    private String symptomSummary;

    
    @NotNull(message = "The Current Diagnosis Is Required")
    private String currentDiagnosis;

}
