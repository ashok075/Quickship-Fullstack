package com.example.demo.dto;

public class RatingDTO {
	private Long id;
    private String hotelName;
    private Double rating;
    
	
    // Constructor using Fields
    public RatingDTO(Long id,String hotelName, Double rating) {
		super();
		this.id = id;
		this.hotelName = hotelName;
		this.rating = rating;
	}
    
    // Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}

}
