package com.example.demo.dto;

public class LoginDto {
    private Long mobileNo;
    private String password;

    // Constructors
    public LoginDto() {}

    public LoginDto(Long mobileNo, String password) {
        this.mobileNo = mobileNo;
        this.password = password;
    }

    // Getters and Setters
    public Long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(Long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
