package com.example.demo.entity;


import jakarta.persistence.*;


@Entity
@Table(name = "ratings")
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hotel_name", unique = true)
    private String hotelName;

    @Column(name = "rating")
    private Double rating;
    
     // Constructor using Fields
    public Rating(Long id, String hotelName, Double rating) {
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