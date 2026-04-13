package edu.jensen.kaj.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String email) {
        super("User not found with email " + email);
    }

    public UserNotFoundException(Long id) {
        super("User not found with id " + id);
    }

}
