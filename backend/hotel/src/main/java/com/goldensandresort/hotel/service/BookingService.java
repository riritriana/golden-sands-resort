package com.goldensandresort.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goldensandresort.hotel.model.Booking;
import com.goldensandresort.hotel.model.User;
import com.goldensandresort.hotel.repository.BookingRepository;
import com.goldensandresort.hotel.repository.UserRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository; // Tambahkan UserRepository

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public String addBooking(Booking booking) {
        // Pastikan User sudah ada di database sebelum ditambahkan ke booking
        User user = userRepository.findById(booking.getIdUser().getId())
                .orElseThrow(() -> new IllegalArgumentException("User tidak ditemukan"));

        booking.setIdUser(user); // Set user yang valid
        bookingRepository.save(booking); // Simpan booking
        return "Booking berhasil ditambah";
    }

    // Get by id
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    // Memperbarui booking berdasarkan ID
    public String updateBooking(Long id, Booking booking) {
        booking.setId(id); // Pastikan booking memiliki ID yang benar
        bookingRepository.save(booking);
        return "Booking berhasil diperbarui";
    }

    // Menghapus booking berdasarkan ID
    public String deleteBooking(Long id) {
        bookingRepository.deleteById(id);
        return "Booking berhasil dihapus";
    }

    public List<Booking> getBookingByUserId(Long id) {

        List<Booking> booking = bookingRepository.findAll().stream().filter(b -> b.getIdUser().getId() == id).toList();
        if (!booking.isEmpty()) {

            return booking;
        }
        return null;
    }
}

// package com.goldensandresort.hotel.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.goldensandresort.hotel.model.Booking;
// import com.goldensandresort.hotel.model.User;
// import com.goldensandresort.hotel.repository.BookingRepository;

// @Service
// public class BookingService {
// @Autowired
// private BookingRepository bookingRepository;

// public List<Booking> getAllBookings() {
// return bookingRepository.findAll();
// }

// public String addBooking(Booking booking) {
// // System.out.println(booking.getIdHotel().getRoomType());
// booking.setIdUser(new User());
// bookingRepository.save(booking);
// return "Berhasil ditambah";
// }

// // get by id
// public Booking getBookingById(Long id) {
// return bookingRepository.findById(id).orElse(null);
// }

// // Memperbarui hotel berdasarkan ID
// public String updateBooking(Long id, Booking booking) {
// booking.setId(id); // Pastikan hotel memiliki ID yang benar
// bookingRepository.save(booking);
// return " berhasil diperbarui";
// }

// // Menghapus hotel berdasarkan ID
// public String deleteBooking(Long id) {
// bookingRepository.deleteById(id);
// return "berhasil dihapus";
// }

// }
