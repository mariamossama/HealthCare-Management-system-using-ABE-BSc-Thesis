package org.example.backend.secuirty;

import lombok.*;
import org.example.backend.entity.User;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Builder
@Component
public class SessionInfo {
    private User user;
}
