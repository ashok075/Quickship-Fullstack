package com.example.demo.mapper;

import com.example.demo.dto.Signupdto;
import com.example.demo.entity.Signup;

public class SignupMapper {
	
	

	    public static Signupdto mapToSignupdto(Signup signup){
	        return new Signupdto(
	                signup.getId(),
	                signup.getName(),
	                signup.getMobileNo(),
	                signup.getEmail(),
	                signup.getPassword(),
	                signup.getRepassword()
	                
	        );
	    }

	    public static Signup mapToSignup(Signupdto SignupDto){
	        return new Signup(
	                SignupDto.getId(),
	                SignupDto.getName(),
	                SignupDto.getMobileNo(),
	                SignupDto.getEmail(),
	                SignupDto.getPassword(),
	                SignupDto.getRepassword()
	                
	               
	        );
	    }

		public static Signupdto mapToSignupDto(Signup signup) {
			// TODO Auto-generated method stub
			return null;
		}
}


