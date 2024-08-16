package com.example.demo.service.impl;

import com.example.demo.dto.UserInformationDTO;
import com.example.demo.entity.UserInformation;
import com.example.demo.mapper.UserInformationMapper;
import com.example.demo.repository.UserInformationRepository;
import com.example.demo.service.UserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInformationServiceImpl implements UserInformationService {

    @Autowired
    private UserInformationRepository repository;

    @Override
    public UserInformationDTO saveUserInformation(UserInformationDTO userInformationDTO) {
        UserInformation userInformation = UserInformationMapper.toEntity(userInformationDTO);
        userInformation = repository.save(userInformation);
        return UserInformationMapper.toDTO(userInformation);
    }
}
