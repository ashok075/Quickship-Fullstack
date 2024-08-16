package com.example.demo.mapper;

import com.example.demo.dto.UserInformationDTO;
import com.example.demo.entity.UserInformation;

public class UserInformationMapper {

    public static UserInformation toEntity(UserInformationDTO dto) {
        UserInformation entity = new UserInformation();
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setAddress(dto.getAddress());
        entity.setLandmark(dto.getLandmark());
        entity.setPhoneNumber(dto.getPhoneNumber());
        entity.setDeliveryTime(dto.getDeliveryTime());
        return entity;
    }

    public static UserInformationDTO toDTO(UserInformation entity) {
        UserInformationDTO dto = new UserInformationDTO();
        dto.setName(entity.getName());
        dto.setEmail(entity.getEmail());
        dto.setAddress(entity.getAddress());
        dto.setLandmark(entity.getLandmark());
        dto.setPhoneNumber(entity.getPhoneNumber());
        dto.setDeliveryTime(entity.getDeliveryTime());
        return dto;
    }
}
