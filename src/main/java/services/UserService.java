package services;

import dto.UserDto;
import entities.Role;
import entities.User;
import mapper.UserMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static entities.Role.LEADER;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Register new user
    public UserDto registerUser(UserDto userDto) {
        User user = UserMapper.toEntity(userDto);
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        user.setRole(userDto.isLeader() ? Role.LEADER : Role.CLIENT);
        user = userRepository.save(user);
        return UserMapper.toDto(user);
    }

    // Get all users
    public List<UserDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserMapper::toDto)
                .collect(Collectors.toList());
    }

    // Check if user exists by email
    public boolean userExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
    
    // Get user by email
    public Optional<UserDto> getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(UserMapper::toDto);
    }
    
    public boolean authenticate(String email, String password) {
        return userRepository.findByEmail(email)
            .map(user -> passwordEncoder.matches(password, user.getPassword()))
            .orElse(false);
    }

    // Get user by ID
    public Optional<UserDto> getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::toDto);
    }

    // Update user (only fields that exist in entity)
    @Transactional
    public Optional<UserDto> updateUser(Long id, UserDto dto) {
        return userRepository.findById(id).map(user -> {
            if (dto.getEmail() != null) user.setEmail(dto.getEmail());
            if (dto.getFirstName() != null) user.setFirstName(dto.getFirstName());
            if (dto.getLastName() != null) user.setLastName(dto.getLastName());
            if (dto.getCountry() != null) user.setCountry(dto.getCountry());
            if (dto.getBirthDate() != null) user.setBirthDate(dto.getBirthDate());
            if (dto.getRole() != null) {
                user.setRole(Role.valueOf(dto.getRole()));
            }
            if (dto.isLeader() != user.isLeader()) {
                user.setLeader(dto.isLeader());
            }
            return UserMapper.toDto(userRepository.save(user));
        });
    }
    
    // Update user profile (for the currently authenticated user)
    @Transactional
    public Optional<UserDto> updateCurrentUserProfile(UserDto dto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email).map(user -> {
            if (dto.getFirstName() != null) user.setFirstName(dto.getFirstName());
            if (dto.getLastName() != null) user.setLastName(dto.getLastName());
            if (dto.getCountry() != null) user.setCountry(dto.getCountry());
            if (dto.getBirthDate() != null) user.setBirthDate(dto.getBirthDate());
            return UserMapper.toDto(userRepository.save(user));
        });
    }
    
    // Search users by name, email, or role
    public List<UserDto> searchUsers(String query, String role) {
        if (role != null && !role.isEmpty()) {
            try {
                Role roleEnum = Role.valueOf(role.toUpperCase());
                return userRepository.searchUsersWithRole(query, roleEnum)
                    .stream()
                    .map(UserMapper::toDto)
                    .collect(Collectors.toList());
            } catch (IllegalArgumentException e) {
                // If role is not valid, fall back to search without role filter
                return searchUsers(query);
            }
        }
        return searchUsers(query);
    }
    
    // Search users by name or email
    public List<UserDto> searchUsers(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllUsers();
        }
        String searchQuery = "%" + query.toLowerCase() + "%";
        return userRepository.searchUsers(searchQuery)
            .stream()
            .map(UserMapper::toDto)
            .collect(Collectors.toList());
    }
    
    // Get current user profile
    public Optional<UserDto> getCurrentUserProfile() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email).map(UserMapper::toDto);
    }

    // Delete user
    @Transactional
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

