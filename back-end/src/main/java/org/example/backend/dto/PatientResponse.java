package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.backend.entity.Doctor;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class PatientResponse {

    private String firstName;
    private String lastName;
    private String gender;
    private List<Doctor> doctors;
    private Long id;

    public PatientResponse(Long id, String firstName, String lastName, String gender, List<Doctor> doctors) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.doctors = doctors;
    }
}
