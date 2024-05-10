package org.example.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.backend.annotation.EntityExists;
import org.example.backend.entity.Gender;
import org.example.backend.entity.User;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequest {

    @NotNull(message = "The Email Is Required")
    private String email;

    @NotNull(message = "The Name Is Requried")
    private String name;

    @NotNull(message = "The Medical History Is Required")
    private String medicalHistory;

    @NotNull(message = "The Gender Id Is Required")
    @EntityExists(message = "There Is No Gender With This ID",
    entityClass = Gender.class,
    propertyName = "id")
    private Long genderId;

    @NotNull(message = "The Doctor Id Is Required")
    @EntityExists(message = "There Is No Doctor With THis Id",
    propertyName = "id",
    entityClass = User.class)
    private Long doctorId;

    @NotNull(message = "The Appointment Date Is Required")
    private Date appointmentDate;

    @NotNull(message = "Date of Birth Date Is Required")
    private Date dateOfBirth;
}
