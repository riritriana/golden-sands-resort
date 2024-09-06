package com.goldensandresort.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goldensandresort.hotel.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
