package org.example.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "appointment")
@Builder
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "appointment_seq")
    @SequenceGenerator(name = "appointment_seq", initialValue = 8, sequenceName = "appointment_seq", allocationSize = 1)
    private Long id;

    @Column(name = "is_booked", columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isBooked;

    @NotNull(message = "The Email Field Is Required")
    private String email;

    @NotNull(message = "The Name Field Is Required")
    private String name;

    @NotNull(message = "There Medical History Is Required")
    private String medicalHistory;

    @NotNull(message = "The Doctor Is Required")
    @ManyToOne()
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    private User doctor;

    @NotNull(message = "The Gender Is Required")
    @ManyToOne()
    @JoinColumn(name = "gender_id", referencedColumnName = "id")
    private Gender gender;

    @NotNull(message = "The Day Field Is Required")
    @Temporal(TemporalType.DATE)
    private Date day;

    @NotNull(message = "The Time Field Is Required")
    @Temporal(TemporalType.TIME)
    private Date time;

    @NotNull(message = "Date Of Birth Is Required")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
}
