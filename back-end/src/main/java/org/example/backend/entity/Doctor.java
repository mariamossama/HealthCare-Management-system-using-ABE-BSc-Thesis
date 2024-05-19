package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "doctor")
@Builder
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doctor_seq")
    @SequenceGenerator(name = "doctor_seq", initialValue = 8, sequenceName = "doctor_seq", allocationSize = 1)
    private Long id;

    @Column(name = "decryption_key")
    private String prv_key = "D:/thesis_check/back-end/src/main/java/org/example/backend/service/Demo/"+"Doctor";

    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Transient
    private long departmentId;

    @ManyToMany(mappedBy = "doctors")
    private List<Patient> patients;

    @Builder.Default
    @Transient
    private String doctorAttributes ="role:doctor access:authorized";


    @Transient
    private String prv_file ;

    





    public void appendAttributes(String new_patient)
    {
        doctorAttributes = doctorAttributes + " " + new_patient;
    }
}
