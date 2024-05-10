package org.example.backend.controller;

import org.example.backend.dto.AppointmentRequest;
import org.example.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "appointment", produces = "application/json")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;
    @PostMapping("save")
    public ResponseEntity appoint(@Validated @RequestBody AppointmentRequest appointmentRequest) throws Exception {
        return ResponseEntity.ok(appointmentService.Save(appointmentRequest));
    }

    @GetMapping("get-doctor-appointment")
    @Secured("Doctor")
    public ResponseEntity getDoctorAppointment() {
        return ResponseEntity.ok(appointmentService.getDoctorAppointment());
    }

    @GetMapping("book/{id}")
    @Secured("Doctor")
    public ResponseEntity bookAppointment(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(appointmentService.bookAppointment(id));
    }
}
