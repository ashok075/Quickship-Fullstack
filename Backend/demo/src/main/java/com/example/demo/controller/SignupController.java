package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.Signupdto;
import com.example.demo.entity.Signup;
import com.example.demo.service.Signupservice;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/signup")
public class SignupController {

    @Autowired
    private Signupservice signupService;

    @PostMapping
    public ResponseEntity<Signupdto> createSignup(@RequestBody Signupdto signupDto) {
        Signupdto savedSignup = signupService.createSignup(signupDto);
        return new ResponseEntity<>(savedSignup, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Signupdto> getSignupById(@PathVariable("id") Long SignupId) {
        Signupdto Signupdto = signupService.getSignupById(SignupId);
        return ResponseEntity.ok(Signupdto);
    }

    @GetMapping
    public ResponseEntity<List<Signupdto>> getAllSignup() {
        List<Signupdto> employees = signupService.getAllSignup();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Signupdto> updateSignup(@PathVariable("id") Long SignupId,
            @RequestBody Signupdto updatedEmployee) {
        Signupdto Signupdto = signupService.updateSignup(SignupId, updatedEmployee);
        return ResponseEntity.ok(Signupdto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSignup(@PathVariable("id") Long SignupId) {
        signupService.deleteSignup(SignupId);
        return ResponseEntity.ok("Deleted successfully!");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginDto loginDto) {
        Signup user = signupService.authenticateUser(loginDto);
        if (user != null) {
            // Authentication successful
            return ResponseEntity.ok(user); 
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
