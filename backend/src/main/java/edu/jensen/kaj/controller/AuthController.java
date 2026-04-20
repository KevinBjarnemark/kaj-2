package edu.jensen.kaj.controller;

import edu.jensen.kaj.dto.AuthRequest;
import edu.jensen.kaj.dto.AuthResponse;
import edu.jensen.kaj.dto.UserDto;
import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.security.JwtUtil;
import edu.jensen.kaj.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody User user) {
        // --- skapa user (UserService sköter nu lösenordskryptering) ---
        User savedUser = userService.createUser(
            user.getEmail(),
            user.getUsername(),
            user.getPassword()
        );

        UserDto userDto = new UserDto(
            savedUser.getId(),
            savedUser.getEmail(),
            savedUser.getUsername(),
            savedUser.getCreatedAt()
        );

        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        // --- autentisera användaren via Spring Security ---
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // --- om ovanstående inte kastar undantag är användaren giltig ---
        String token = jwtUtil.generateToken(request.getEmail());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}