package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.Signupdto;
import com.example.demo.entity.Signup;

public interface Signupservice {
	public Signupdto createSignup(Signupdto signupdto);
	
	  Signupdto getSignupById(Long SignupId);

	    List<Signupdto> getAllSignup();

	    Signupdto updateSignup(Long SignupId, Signupdto updatedsignup);

	    void deleteSignup(Long SignupId);
	    
	    public Signup authenticateUser(LoginDto loginDto);


}
