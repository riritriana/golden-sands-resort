package com.goldensandresort.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goldensandresort.hotel.model.Hotel;
import com.goldensandresort.hotel.repository.HotelRepository;

@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;

    // Menambah hotel baru
    public String addHotel(Hotel hotel) {
        hotelRepository.save(hotel);
        return "Hotel berhasil ditambah";
    }

    // Mendapatkan semua hotel
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    // get hotel by id
    public Hotel getHotelById(Long id) {
        return hotelRepository.findById(id).orElse(null);
    }

    // Memperbarui hotel berdasarkan ID
    public String updateHotel(Long id, Hotel hotel) {
        hotel.setId(id); // Pastikan hotel memiliki ID yang benar
        hotelRepository.save(hotel);
        return "Hotel berhasil diperbarui";
    }

    // Menghapus hotel berdasarkan ID
    public String deleteHotel(Long id) {
        hotelRepository.deleteById(id);
        return "Hotel berhasil dihapus";
    }
}
