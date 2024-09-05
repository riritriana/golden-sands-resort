package com.goldensandresort.hotel.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.goldensandresort.hotel.model.User;
import com.goldensandresort.hotel.repository.UserRepository;
import com.goldensandresort.hotel.service.JwtService;
import com.nimbusds.jose.JOSEException;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(JwtService jwtService, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole("user");
            return ResponseEntity.ok(userRepository.save(user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("sign-in")
    public ResponseEntity<Map<String, Object>> signIn(@RequestParam String email, @RequestParam String password,
            HttpServletResponse response) throws JOSEException {
        User user = userRepository.findByEmail(email);
        System.out.println("user : " + user);
        User user1 = userRepository.findByRole("admin");
        if (user1 == null) {
            User admin = new User();
            user.setAddres("admin");
            user.setEmail("admin@gmail.com");
            user.setName("admin");
            user.setNoHp("admin");
            user.setPassword(passwordEncoder.encode("admin"));
            user.setRole("admin");
            userRepository.save(admin);
        }
        if (user != null) {
            if (passwordEncoder.matches(password, user.getPassword())) {
                String token = jwtService.create(user.getId().toString());

                Cookie cookie = new Cookie("token", token);
                cookie.setHttpOnly(true);
                cookie.setMaxAge(60 * 60 * 24 * 7);
                cookie.setPath("/");
                response.addCookie(cookie);

                // Membuat response menggunakan Map
                Map<String, Object> responseBody = new HashMap<>();
                responseBody.put("token", token);
                responseBody.put("role", user.getRole());

                return ResponseEntity.ok(responseBody);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("me")
    public User me() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @PostMapping("sign-out")
    public void signOut(HttpServletResponse response) {
        jwtService.signOut(response);
    }
}