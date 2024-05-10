package org.example.backend.controller;

import org.example.backend.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "gender", produces = "application/json")
public class GenderController {
    @Autowired
    private GenderService genderService;

    @GetMapping("all")
    public ResponseEntity getAllGender(){
        return ResponseEntity.ok(genderService.getAllGenders());
    }
}
