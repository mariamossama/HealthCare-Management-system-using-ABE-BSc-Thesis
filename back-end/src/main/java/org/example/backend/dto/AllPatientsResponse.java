package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AllPatientsResponse {
    String firstName;
    String lastName;
    String dateOfBirth;
    String medicalHistory;
    String symptomSummary;
    String currentDiagnosis;
}
