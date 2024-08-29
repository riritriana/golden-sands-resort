package com.goldensandresort.hotel.controller;

import java.util.List;

import com.goldensandresort.hotel.model.Hotel;
import com.goldensandresort.hotel.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class HotelController {
    HotelRepository repository;

    @Autowired
    public HotelController(HotelRepository repository) {
        this.repository = repository;
    }

    @GetMapping("hotel")
    public List<Hotel> getAll() {
        return repository.findAll();
    }
}
