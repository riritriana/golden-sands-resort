package com.goldensandresort.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goldensandresort.hotel.model.Booking;
import com.goldensandresort.hotel.service.BookingService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping()
    public List<Booking> getAll() {
        return bookingService.getAllBookings();
    }

    // get by id
    @GetMapping("{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // get by user id
    @GetMapping("/user/{id}")
    public List<Booking> getBookingByUserId(@PathVariable Long id) {
        return bookingService.getBookingByUserId(id);
    }

    // add
    @PostMapping()
    public String postBooking(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }

    @PutMapping("/{id}")
    public String putBooking(@RequestBody Booking booking, @PathVariable Long id) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {
        return bookingService.deleteBooking(id);
    }
}
