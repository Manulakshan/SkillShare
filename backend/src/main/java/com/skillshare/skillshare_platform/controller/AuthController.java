package com.skillshare.skillshare_platform.controller;

import com.skillshare.skillshare_platform.dto.LoginRequestDto;
import com.skillshare.skillshare_platform.dto.LoginResponseDto;
import com.skillshare.skillshare_platform.model.User;
import com.skillshare.skillshare_platform.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequest) {
        User user = authenticationService.authenticate(
            loginRequest.getUsername(),
            loginRequest.getPassword()
        );
        
        // In a real application, you would generate a JWT token here
        LoginResponseDto response = new LoginResponseDto();
        response.setUsername(user.getUsername());
        response.setUserId(user.getUserId());
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        // In a real application, you would invalidate the token here
        return ResponseEntity.ok().build();
    }
}
