package org.example.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "gender")
@Builder
public class Gender {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gender_seq")
    @SequenceGenerator(name = "gender_seq", initialValue = 8, sequenceName = "gender_seq", allocationSize = 1)
    private Long id;

    @NotNull(message = "The Name Field Is Required")
    private String name;
}
