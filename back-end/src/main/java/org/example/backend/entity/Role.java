package org.example.backend.entity;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "role")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_seq")
    @SequenceGenerator(name = "role_seq", initialValue = 8, sequenceName = "role_seq", allocationSize = 1)
    private Long id;

    @Column(unique = true)
    @NotBlank(message = "The Name Field Is Required")
    private String name;

    private String description;

    @OneToMany(mappedBy = "role")
    private List<User> users;

    public String print()
    {
        return name + " " + description + " " + id ;
    }
}

