package org.example.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SaveNewOperationRequest {

    @NotNull(message = "Name is Required")
    private String name;
    @NotNull(message = "The Email Field Is Required")
    private String email;
    @NotNull(message = "The Phone Is Required")
    private String phone;
    @NotNull(message = "Role Id Is Required")
    private Long roleId;
}
