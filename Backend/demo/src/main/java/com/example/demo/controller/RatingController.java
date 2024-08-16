package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.RatingDTO;
import com.example.demo.service.RatingService;


@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @GetMapping("/{hotelName}")
    public ResponseEntity<RatingDTO> getRating(@PathVariable String hotelName) {
        RatingDTO ratingDTO = ratingService.getRatingByHotelName(hotelName);
        return ResponseEntity.ok(ratingDTO);
    }
}