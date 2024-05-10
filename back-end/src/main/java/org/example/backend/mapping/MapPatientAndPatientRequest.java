package org.example.backend.mapping;

import org.example.backend.dto.PatientRequest;
import org.example.backend.entity.Patient;
import org.springframework.stereotype.Component;

@Component
public class MapPatientAndPatientRequest {
    public void mapPatientRequestIntoPatient(PatientRequest patientRequest, Patient patient){
        patient.setId(patientRequest.getId());
        patient.setLastName(patientRequest.getLastName());
        patient.setFirstName(patientRequest.getFirstName());
        patient.setDateOfBirth(patientRequest.getDateOfBirth());
        patient.setMedicalHistory(patientRequest.getMedicalHistory());
        patient.setSymptomSummary(patientRequest.getSymptomSummary());
        patient.setCurrentDiagnosis(patientRequest.getCurrentDiagnosis());
    }
}
