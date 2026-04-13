package edu.jensen.kaj.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import edu.jensen.kaj.dto.UserDto;
import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.exception.UserNotFoundException;
import edu.jensen.kaj.service.UserService;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(
                user.getEmail(),
                user.getUsername(),
                user.getPassword());

        UserDto response = new UserDto(
                createdUser.getId(),
                createdUser.getEmail(),
                createdUser.getUsername(),
                createdUser.getCreatedAt());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        try {
            User user = userService.getUserById(id);
            UserDto response = new UserDto(id, user.getEmail(), user.getUsername(), user.getCreatedAt());
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<UserDto> updateUserById(@PathVariable Long id,
            @RequestBody User user) {
        try {
            User updated = userService.updateUserById(
                    id,
                    user.getUsername(),
                    user.getEmail());

            UserDto response = new UserDto(
                    updated.getId(),
                    updated.getEmail(),
                    updated.getUsername(),
                    updated.getCreatedAt());

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<User> users = userService.getAllUsers();

        List<UserDto> response = new ArrayList<>();
        for (User user : users) {
            response.add(new UserDto(
                    user.getId(),
                    user.getEmail(),
                    user.getUsername(),
                    user.getCreatedAt()));
        }

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        try {
            userService.deleteUserById(id);
            return ResponseEntity.noContent().build();

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
