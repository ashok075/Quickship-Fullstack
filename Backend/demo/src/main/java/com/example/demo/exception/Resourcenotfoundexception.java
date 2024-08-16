package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(value = HttpStatus.NOT_FOUND)

	 
	public class Resourcenotfoundexception extends RuntimeException{

	// Print the Custom error msg
	    public Resourcenotfoundexception(String message){
	        super(message);
	    }
	}


