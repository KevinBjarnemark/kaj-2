package edu.jensen.kaj.dto;

import java.time.LocalDateTime;

public class UserDto {
    private Long id;
    private String email;
    private String username;
    private LocalDateTime createdAt;

    public UserDto(Long id, String email, String username, LocalDateTime createdAt) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

}
