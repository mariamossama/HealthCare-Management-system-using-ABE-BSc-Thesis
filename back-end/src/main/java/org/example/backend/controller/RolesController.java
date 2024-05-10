package org.example.backend.controller;

import org.example.backend.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "role", produces = "application/json")
public class RolesController {
    @Autowired
    RoleService roleService;

    @RequestMapping("all-operation-roles")
    @Secured("HealthCareAdmin")
    public ResponseEntity getAllOperationRoles(){
        return ResponseEntity.ok(roleService.getAllOperationalRoles());
    }

    @GetMapping("find-by-name/{name}")
    public ResponseEntity getRolesByName(@PathVariable String name) throws Exception {
        return ResponseEntity.ok(roleService.findByName(name));
    }
}
