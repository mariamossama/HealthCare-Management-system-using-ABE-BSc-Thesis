package org.example.backend.controller;

import org.example.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "doctor", produces = "application/json")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping("patient")
    @Secured("Doctor")
    public ResponseEntity getDoctorPatient() throws Exception {
        return ResponseEntity.ok(doctorService.findDoctorPatient());
    }
    @GetMapping("GetAllDoctors")
    public ResponseEntity getAllDoctors() throws Exception {
        return ResponseEntity.ok(doctorService.getAllDoctors());
    }

}
