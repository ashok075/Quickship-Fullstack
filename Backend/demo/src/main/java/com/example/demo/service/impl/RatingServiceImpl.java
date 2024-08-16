package com.example.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.RatingDTO;
import com.example.demo.entity.Rating;
import com.example.demo.exception.Resourcenotfoundexception;
import com.example.demo.mapper.RatingMapper;
import com.example.demo.repository.RatingRepository;
import com.example.demo.service.RatingService;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public void addRating(RatingDTO ratingDTO) {
        Rating rating = RatingMapper.mapToRating(ratingDTO);
        ratingRepository.save(rating);
    }

    @Override
    public RatingDTO getRatingByHotelName(String hotelName) {
        Rating rating = ratingRepository.findByHotelName(hotelName)
                .orElseThrow(() -> new Resourcenotfoundexception("Rating not found for hotel: " + hotelName));
        return RatingMapper.mapToRatingdto(rating);
    }
}
