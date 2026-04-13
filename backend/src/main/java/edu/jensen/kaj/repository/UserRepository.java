package edu.jensen.kaj.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.jensen.kaj.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}
