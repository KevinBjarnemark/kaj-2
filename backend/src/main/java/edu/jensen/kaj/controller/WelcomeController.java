package edu.jensen.kaj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
    @GetMapping("/welcome/{name}")
    public String greetingResponse(@PathVariable String name) {
        return "Welcome " + name + "! 😃";
    }
}
