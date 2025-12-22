package controllers;

import dto.LoginRequest;
import dto.RegisterRequest;
import dto.UserDto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import services.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, 
                         UserService userService,
                         PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        System.out.println("Login attempt for username/email: " + username);
        try {
            // Try to authenticate with the provided username (which could be email or username)
            // The username field is used as email in the database (e.g., "test1")
            if (userService.authenticate(username, password)) {
                Map<String, String> response = new HashMap<>();
                response.put("message", "Login successful");
                System.out.println("Login successful for: " + username);
                return ResponseEntity.ok(response);
            } else {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Invalid username or password");
                System.out.println("Login failed for: " + username);
                return ResponseEntity.badRequest().body(errorResponse);
            }
        } catch (Exception e) {
            System.out.println("Login exception for: " + username + " - " + e.getMessage());
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Login failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            // Check if user already exists
            if (userService.userExists(registerRequest.getEmail())) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Email is already in use");
                return ResponseEntity.badRequest().body(errorResponse);
            }
            
            // Register the user - password will be encoded in UserService
            UserDto userDto = new UserDto();
            userDto.setEmail(registerRequest.getEmail());
            userDto.setPassword(registerRequest.getPassword());
            userDto.setFirstName(registerRequest.getFirstName());
            userDto.setLastName(registerRequest.getLastName());
            userDto.setCountry(registerRequest.getCountry());
            userDto.setLeader(registerRequest.isLeader());

            UserDto createdUser = userService.registerUser(userDto);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error registering user: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
