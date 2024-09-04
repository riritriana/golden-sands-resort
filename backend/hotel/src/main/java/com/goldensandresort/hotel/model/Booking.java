package com.goldensandresort.hotel.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    private Long id;
    private LocalDate checkIn;
    private LocalDate checkOut;
    @ManyToOne
    @JoinColumn(name = "id_hotel", referencedColumnName = "id")
    private Hotel idHotel;
    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User idUser;

}
