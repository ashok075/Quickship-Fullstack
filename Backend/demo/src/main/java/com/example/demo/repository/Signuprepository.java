package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Signup;

public interface Signuprepository extends JpaRepository<Signup, Long>{
	  Signup findByMobileNo(Long mobileNo);

	
	}

	
	



