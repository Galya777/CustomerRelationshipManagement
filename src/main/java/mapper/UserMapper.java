package mapper;


import dto.UserDto;
import entities.Role;
import entities.User;


public class UserMapper {

    public static UserDto toDto(User user) {
        if (user == null) return null;

        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setCountry(user.getCountry());
        dto.setBirthDate(user.getBirthDate());
        dto.setRole(user.getRole() != null ? user.getRole().name() : null);
        dto.setLeader(user.isLeader());
        return dto;
    }

    public static User toEntity(UserDto dto) {
        if (dto == null) return null;

        User user = new User();
        user.setId(dto.getId());
        user.setEmail(dto.getEmail());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setCountry(dto.getCountry());
        user.setBirthDate(dto.getBirthDate());
        user.setLeader(dto.isLeader());
        // Default role to CLIENT if not set
        user.setRole(dto.getRole() != null ? Role.valueOf(dto.getRole()) : Role.CLIENT);
        return user;
    }
}

