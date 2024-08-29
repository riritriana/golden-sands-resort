package com.goldensandresort.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goldensandresort.hotel.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {

}
