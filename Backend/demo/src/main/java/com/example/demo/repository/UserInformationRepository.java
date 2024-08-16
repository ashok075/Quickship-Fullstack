package com.example.demo.repository;

import com.example.demo.entity.UserInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInformationRepository extends JpaRepository<UserInformation, Long> {
}
