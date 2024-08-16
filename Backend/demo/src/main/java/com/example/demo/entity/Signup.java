package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "signup")

public class Signup {
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(name = "Name")
	    private String name;

	    @Column(name = "Mobile_No")
	    private Long mobileNo;

	    @Column(name = "email_id", nullable = false, unique = true)
	    private String email;
	    
	    @Column(name = "Password",nullable = false,unique = true)
	    private String password;
	    
	    @Column(name = "Re_Password")
	    private String repassword;
	    
        //Constructor using Field
		public Signup(Long id, String name, Long mobileNo, String email, String password, String repassword) {
			super();
			this.id = id;
			this.name = name;
			this.mobileNo = mobileNo;
			this.email = email;
			this.password = password;
			this.repassword = repassword;
		}
		
		//Getter and Setters for Entity

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Long getMobileNo() {
			return mobileNo;
		}

		public void setMobileNo(Long mobileNo) {
			this.mobileNo = mobileNo;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getRepassword() {
			return repassword;
		}

		public void setRepassword(String repassword) {
			this.repassword = repassword;
		}
		public Signup() {
			
		}
	    
		
	}



