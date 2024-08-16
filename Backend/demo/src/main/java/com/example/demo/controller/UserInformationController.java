package com.example.demo.controller;

import com.example.demo.dto.UserInformationDTO;
import com.example.demo.service.UserInformationService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserInformationController {

    @Autowired
    private UserInformationService service;

    @PostMapping("/save")
    public ResponseEntity<UserInformationDTO> saveUserInformation(@RequestBody UserInformationDTO userInformationDTO) {
        UserInformationDTO savedUserInformation = service.saveUserInformation(userInformationDTO);
        return ResponseEntity.ok(savedUserInformation);
    }
}
