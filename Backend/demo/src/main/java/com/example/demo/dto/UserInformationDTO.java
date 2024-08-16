package com.example.demo.dto;

public class UserInformationDTO {
    private String name;
    private String email;
    private String address;
    private String landmark;
    private String phoneNumber;
    private String deliveryTime;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    // Constructor
    public UserInformationDTO() {
    }

    public UserInformationDTO(String name, String email, String address, String landmark, String phoneNumber, String deliveryTime) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.landmark = landmark;
        this.phoneNumber = phoneNumber;
        this.deliveryTime = deliveryTime;
    }

    @Override
    public String toString() {
        return "UserInformationDTO{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", landmark='" + landmark + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", deliveryTime='" + deliveryTime + '\'' +
                '}';
    }
}
