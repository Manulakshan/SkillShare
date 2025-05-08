package com.skillshare.skillshare_platform.service;

import com.skillshare.skillshare_platform.model.User;
import com.skillshare.skillshare_platform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User authenticate(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // if (!passwordEncoder.matches(password, user.getPassword())) {
        //     throw new RuntimeException("Invalid password");
        // }
        
        return user;
    }

    public void logout(User user) {
        // In a real application, you would invalidate the session/token here
    }
}
