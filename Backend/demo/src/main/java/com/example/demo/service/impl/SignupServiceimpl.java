package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.Signupdto;
import com.example.demo.entity.Signup;
import com.example.demo.exception.Resourcenotfoundexception;
import com.example.demo.mapper.SignupMapper;
import com.example.demo.repository.Signuprepository;
import com.example.demo.service.Signupservice;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SignupServiceimpl implements Signupservice {

    @Autowired
    private Signuprepository signupRepository;

    @Override
    public Signupdto createSignup(Signupdto SignupDto) {
        Signup Signup = SignupMapper.mapToSignup(SignupDto);
        // Store password as is (plain text)
        Signup savedSignup = signupRepository.save(Signup);
        return SignupMapper.mapToSignupdto(savedSignup);
    }

    @Override
    public Signupdto getSignupById(Long SignupId) {
        Signup auth = signupRepository.findById(SignupId)
                .orElseThrow(() ->
                        new Resourcenotfoundexception("Employee not found with id : " + SignupId));

        return SignupMapper.mapToSignupdto(auth);
    }

    @Override
    public List<Signupdto> getAllSignup() {
        List<Signup> auths = signupRepository.findAll();
        return auths.stream().map(SignupMapper::mapToSignupdto).collect(Collectors.toList());
    }

    @Override
    public Signupdto updateSignup(Long SignupId, Signupdto updatedSignup) {
        Signup auth = signupRepository.findById(SignupId).orElseThrow(
                () -> new Resourcenotfoundexception("Employee not found with id: " + SignupId)
        );
        auth.setMobileNo(updatedSignup.getMobileNo());
        auth.setEmail(updatedSignup.getEmail());
        auth.setPassword(updatedSignup.getPassword()); // Store password as is (plain text)
        auth.setRepassword(updatedSignup.getRepassword());

        Signup updatedSignupObj = signupRepository.save(auth);

        return SignupMapper.mapToSignupdto(updatedSignupObj);
    }

    @Override
    public void deleteSignup(Long SignupId) {
        Signup auth = signupRepository.findById(SignupId).orElseThrow(
                () -> new Resourcenotfoundexception("Employee not found with id: " + SignupId)
        );

        signupRepository.deleteById(SignupId);
    }

    @Override
    public Signup authenticateUser(LoginDto loginDto) {
        // Find the user by mobile number
        Signup user = signupRepository.findByMobileNo(loginDto.getMobileNo());
        System.out.println(loginDto.getMobileNo());
        if (user != null && user.getPassword().equals(loginDto.getPassword())) {
            return user; // Authentication successful
        }
        return null; // Authentication failed
    }
}
