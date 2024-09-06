package com.goldensandresort.hotel.config;

import java.io.IOException;
// import java.util.logging.Logger;

// import org.slf4j.LoggerFactory;
// import org.apache.catalina.filters.RequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.goldensandresort.hotel.model.User;
import com.goldensandresort.hotel.repository.UserRepository;
import com.goldensandresort.hotel.service.JwtService;

import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class RequestFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Autowired
    public RequestFilter(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    @Override
    public void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain)
            throws IOException, ServletException {
        String auth = request.getHeaders("Authorization").toString();
        System.out.println("Ini adalah auth :" + auth);
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            Long id = null;

            for (Cookie cookie : cookies) {
                if ("token".equals(cookie.getName())) {
                    String token = cookie.getValue();
                    String subject;
                    try {
                        System.out.println(token);
                        subject = jwtService.verify(token);
                        id = Long.parseLong(subject);
                    } catch (Exception e) {
                        jwtService.signOut(response);
                    }
                    break;
                }
            }

            if (id != null) {
                User user = userRepository.findById(id).orElse(null);
                if (user != null) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user, null,
                            user.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                } else {
                    jwtService.signOut(response);
                }
            }
        }

        filterChain.doFilter(request, response);
    }
}