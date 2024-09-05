package com.goldensandresort.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goldensandresort.hotel.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByRole(String role);
}
