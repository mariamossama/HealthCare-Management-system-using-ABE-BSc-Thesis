package org.example.backend.controller;

import org.example.backend.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "department", produces = "application/json")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @RequestMapping("all-operation-deps")
    @Secured("HealthCareAdmin")
    public ResponseEntity getAllOperationRoles(){
        return ResponseEntity.ok(departmentService.getAllDepartments());
    }
    
}


