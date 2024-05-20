package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;


@Entity
@Setter
@Getter
@AllArgsConstructor
@Table(name = "patient")
@Builder
@ToString
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "patient_seq")
    @SequenceGenerator(name = "patient_seq", initialValue = 8, sequenceName = "patient_seq", allocationSize = 1)
    private Long id;

    @Transient
    private String uniqueId;

    public Patient() {
        this.uniqueId =(UUID.randomUUID()).toString();  // Automatically assign a UUID at instantiation
    }

    @NotNull(message = "The First Name Is Required")
    private String firstName;

    @NotNull(message = "The Last Name Is Required")
    private String lastName;

    @Transient
    private String medicalHistory= "";

    @Transient
    private String symptomSummary ="";

    @Transient
    private String currentDiagnosis="";
    
    @NotNull(message = "The Date Of Birth Is Required")
    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "encrypted_data")
    @JsonIgnore()
    @Lob
    private byte[] encryptedData;

    public void setEncryptedData(byte[] data) {
        this.encryptedData = data;
    }

    // @NotNull(message = "The Doctor Is Required")
    // @ManyToMany()
    // @JoinTable(name = "patient_doctor",
    //         joinColumns = @JoinColumn(name = "patient_id"),
    //         inverseJoinColumns = @JoinColumn(name = "doctor_id"))
    // private List<Doctor> doctors;

    @NotNull(message = "The Gender Is Required")
    @ManyToOne()
    @JoinColumn(name = "gender_id", referencedColumnName = "id")
    private Gender gender;

    @NotNull(message = "The Nurse Is Required")
    @ManyToMany()
    @JoinTable(name = "patient_nurse",
            joinColumns = @JoinColumn(name = "patient_id"),
            inverseJoinColumns = @JoinColumn(name = "nurse_id"))
    private List<User> nurse;

    @Transient
    private String normalData = "firstName:"+firstName+"lastName:"+lastName;
  // This annotation means the field is not stored in the database
    @Transient  // Ensure this value is always calculated fresh
    public String getNormalData() {
        return "firstName:" + firstName + ",lastName:" + lastName;
    }

    @Transient
    private String sensitiveData = ",DOB:"+dateOfBirth+",medicalHistory:"+medicalHistory+",symptoms:"+symptomSummary+"diagnosis:"+currentDiagnosis;
    public String getSensitiveData() {
        return "DOB:" + dateOfBirth + ",medicalHistory:" + medicalHistory + ",symptoms:" + symptomSummary + ",diagnosis:" + currentDiagnosis;
    }

}
