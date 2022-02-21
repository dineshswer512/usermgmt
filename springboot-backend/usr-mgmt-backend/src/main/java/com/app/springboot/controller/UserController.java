package com.app.springboot.controller;

import com.app.springboot.exception.DataNotFoundException;
import com.app.springboot.model.User;
import com.app.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
//@CrossOrigin(origins = "http://localhost:8081")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //fetch all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //
    @PostMapping("/users")
    public User insertUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("/users/{userid}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable int userId) throws DataNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new DataNotFoundException("User not exist with Id : "+ userId));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
