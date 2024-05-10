package org.example.backend.controller;

import org.example.backend.dto.SaveNewOperationRequest;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "users", produces = "application/json")
@RestController()
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("all-operational-users")
    @Secured("HealthCareAdmin")
    public ResponseEntity getAllOperationalUsers(){
        return ResponseEntity.ok(userService.getAllOperationalUsers());
    }

    @PostMapping("edit/{id}")
    @Secured("HealthCareAdmin")
    public ResponseEntity editOperationUser(@PathVariable Long id, @RequestBody SaveNewOperationRequest saveNewOperationRequest) throws Exception {
        return ResponseEntity.ok(userService.editOperationalUser(id, saveNewOperationRequest));
    }

    @GetMapping("deactive-operation-user/{id}")
    @Secured("HealthCareAdmin")
    public ResponseEntity deActivateOperationUser(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(userService.deActivateOperationUser(id));
    }

    @PostMapping("save-operation-user")
    @Secured("HealthCareAdmin")
    public ResponseEntity saveOperationUser(@RequestBody SaveNewOperationRequest saveNewOperationRequest) throws Exception {
        return ResponseEntity.ok(userService.saveNewOperationUser(saveNewOperationRequest));
    }

    @Secured("HealthCareProvider")
    @GetMapping("dashboard")
    public ResponseEntity getProviderDashboard() throws Exception {
        return ResponseEntity.ok(userService.getProviderDashboard());
    }

    @Secured("HealthCareProvider")
    @GetMapping("findByType/{type}")
    public ResponseEntity getByType(@PathVariable String type){
        return ResponseEntity.ok(userService.findByType(type));
    }
}
