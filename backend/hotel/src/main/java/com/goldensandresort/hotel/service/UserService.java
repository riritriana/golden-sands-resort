package com.goldensandresort.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goldensandresort.hotel.model.User;
import com.goldensandresort.hotel.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Menambahkan user
    public String addUser(User user) {
        userRepository.save(user);
        return "User Berhasil ditambahkan";
    }

    public String deleteUser(Long id) {
        userRepository.deleteById(id);
        return "berhasil di delete";
    }

    // Mendapatkan user berdasarkan ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
