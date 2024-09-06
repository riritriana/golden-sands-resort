package com.goldensandresort.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goldensandresort.hotel.model.User;
import com.goldensandresort.hotel.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public List<User> getAll() {
        return userService.getAllUsers();
    }

    @PostMapping()
    public String postUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @DeleteMapping("{id}")
    public String deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

    // Menambahkan endpoint untuk mendapatkan user berdasarkan ID
    @GetMapping("{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
