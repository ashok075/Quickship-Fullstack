package com.example.demo.service;




import com.example.demo.dto.RatingDTO;

public interface RatingService {
	
	void addRating(RatingDTO ratingdto);
	
	  RatingDTO getRatingByHotelName(String hotelName);
	}