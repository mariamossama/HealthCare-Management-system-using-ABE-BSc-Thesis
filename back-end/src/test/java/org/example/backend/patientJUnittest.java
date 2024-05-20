package org.example.backend;

import java.util.ArrayList;
import java.util.List;

import org.example.backend.dto.PatientRequest;
import org.example.backend.entity.Patient;
import org.example.backend.mapping.MapPatientAndPatientRequest;
import org.example.backend.service.PatientService;
import org.example.backend.service.RoleService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;



public class patientJUnittest {

    @Test 
    void shouldcheckpatient()
    {
        var patient = new Patient();
        var patientRequest = new PatientRequest();
        var newmap = new MapPatientAndPatientRequest();
        var roleService = new RoleService();
        var patientService = new PatientService();
        patientRequest.setFirstName("mariam");
        patientRequest.setLastName("azab");
        patientRequest.setDateOfBirth("08/08/2002");
        patientRequest.setGenderId(1L);
        List<Long> longList = new ArrayList<>();
        longList.add(2L);
        longList.add(3L);
        patientRequest.setDoctorIds(longList);
        // Call the method with the list as a parameter
        newmap.mapPatientRequestIntoPatient(patientRequest, patient);
       // patientService.addNewPatient(null)

        Assertions.assertEquals("mariam", patient.getFirstName());
        Assertions.assertEquals("azab", patient.getLastName());
       // Assertions.assertEquals("male", patient.getGender().getName());
        Assertions.assertEquals("08/08/2002", patient.getDateOfBirth());   
    }
    
    
}
