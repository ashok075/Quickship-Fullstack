package com.example.demo.mapper;


import com.example.demo.dto.RatingDTO;

import com.example.demo.entity.Rating;

public class RatingMapper {
    
	 public static RatingDTO mapToRatingdto(Rating rating){
	        return new RatingDTO (
	                rating.getId(),
	                rating.getHotelName(),
	                rating.getRating()
	                
	        		);
	 }
	
	                

	    public static Rating mapToRating(RatingDTO ratingDto){
	        return new Rating(
	        		
	        		    ratingDto.getId(),
		                ratingDto.getHotelName(),
		                ratingDto.getRating()
		               
		               
		                
	                
	               
	        );
	    }



		

	
}
