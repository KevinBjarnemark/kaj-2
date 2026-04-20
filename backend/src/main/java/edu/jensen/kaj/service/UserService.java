package edu.jensen.kaj.service;

import java.util.List;

import edu.jensen.kaj.exception.UserNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder; // tillagd
import org.springframework.stereotype.Service;

import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // tillagd

    // --- uppdaterad konstruktor för att injicera passwordEncoder från ApplicationConfig ---
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(String email, String username, String password) {
        if (userRepository.existsByEmail(email)) {
            // --- REFACTORED --- svenskt felmeddelande för konsekvens ---
            throw new RuntimeException("E-postadressen existerar redan: " + email);
        }

        // --- REFACTORED --- Kryptera lösenordet innan det sparas i databasen ---
        String encodedPassword = passwordEncoder.encode(password);
        
        User user = new User(email, username, encodedPassword);
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUserById(Long id, String username, String email) {
        User user = getUserById(id);

        if (username != null) {
            user.setUsername(username);
        }
        if (email != null) {
            user.setEmail(email);
        }

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUserById(Long id) {
        getUserById(id);
        userRepository.deleteById(id);
    }
}