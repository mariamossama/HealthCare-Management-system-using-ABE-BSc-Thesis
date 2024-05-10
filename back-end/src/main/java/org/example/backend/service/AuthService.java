package org.example.backend.service;

import org.example.backend.dto.AuthenticationResponse;
import org.example.backend.dto.LoginRequest;
import org.example.backend.entity.User;
import org.example.backend.handler.WrongUserNameOrPasswordException;
import org.example.backend.secuirty.JwtTokenUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    BCryptPasswordEncoder byBCryptPasswordEncoder;
    @Autowired
    UserService userService;
    @Autowired
    JwtTokenUtilities jwtTokenUtilities;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    RoleService roleService;
    public AuthenticationResponse Login(LoginRequest loginRequest) throws WrongUserNameOrPasswordException {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        User user = userService.findUserByEmail(loginRequest.getEmail()).orElseThrow(() -> new WrongUserNameOrPasswordException("There Is No User With This Data"));

        String token = jwtTokenUtilities.generateToken(user);

        return AuthenticationResponse.builder()
                .token(token)
                .user(user)
                .build();
    }

    public String encryptPassword(String password){
        return byBCryptPasswordEncoder.encode(password);
    }
}
