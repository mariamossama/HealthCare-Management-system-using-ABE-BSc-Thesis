package org.example.backend.controller;

import jakarta.validation.Valid;
import org.example.backend.dto.PatientRequest;
import org.example.backend.service.PatientService;
import org.python.core.exceptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "patient", produces = "application/json")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping("add")
    public ResponseEntity addNewPatient(@Valid @RequestBody PatientRequest patientRequest) throws Exception {
        return ResponseEntity.ok(patientService.addNewPatient(patientRequest));
    }

    @GetMapping("all")
    public ResponseEntity findAllPatient(){
        return ResponseEntity.ok(patientService.findAllPatient());
    }

    @GetMapping("finById/{id}")
    public ResponseEntity findPatientById(@PathVariable Long id) throws Exception {
        
        try {
            return ResponseEntity.ok(patientService.findById(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
