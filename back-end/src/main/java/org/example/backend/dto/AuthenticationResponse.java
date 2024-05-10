package org.example.backend.dto;
import lombok.*;
import org.example.backend.entity.User;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Builder
public class AuthenticationResponse {
    private String token;
    private User user;
}
