package services;



import dto.UserDto;
import entities.Role;
import entities.User;
import mapper.UserMapper;
import org.springframework.stereotype.Service;
import repositories.UserRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static entities.Role.LEADER;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register new user
    public UserDto registerUser(UserDto userDto) {
        User user = UserMapper.toEntity(userDto);
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

    // Get user by ID
    public Optional<UserDto> getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::toDto);
    }

    // Update user (only fields that exist in entity)
    public Optional<UserDto> updateUser(Long id, UserDto dto) {
        return userRepository.findById(id).map(user -> {
            user.setEmail(dto.getEmail());
            user.setFirstName(dto.getFirstName());
            user.setLastName(dto.getLastName());
            user.setCountry(dto.getCountry());
            user.setBirthDate(dto.getBirthDate());
            if (dto.getRole() != null) {
                user.setRole(Role.valueOf(dto.getRole()));
            }
            user.setLeader(dto.isLeader());
            userRepository.save(user);
            return UserMapper.toDto(user);
        });
    }

    // Delete user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

