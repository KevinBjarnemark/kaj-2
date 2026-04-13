package edu.jensen.kaj.service;

import java.util.List;

import edu.jensen.kaj.exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(String email, String username, String password) {

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists: " + email);
        }

        User user = new User(email, username, password);
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
