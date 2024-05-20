package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "department")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Department {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dep_seq")
    @SequenceGenerator(name = "dep_seq", initialValue = 8, sequenceName = "dep_seq", allocationSize = 1)
    private Long id;


    @Column(unique = true)
    @NotBlank(message = "The Name Field Is Required")
    private String departmentName;

    public String print()
    {
        return id + " " + departmentName;
    }
}
