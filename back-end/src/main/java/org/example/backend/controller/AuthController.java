package org.example.backend.controller;


import jakarta.validation.Valid;
import org.example.backend.dto.LoginRequest;
import org.example.backend.handler.WrongUserNameOrPasswordException;
import org.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value ="/auth", produces = "application/json")
@CrossOrigin
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity login(@Valid @RequestBody LoginRequest loginRequest) throws WrongUserNameOrPasswordException {
        return ResponseEntity.ok(authService.Login(loginRequest));
    }
}

