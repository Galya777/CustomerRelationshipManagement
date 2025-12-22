package mapper;

import dto.GroupDto;
import entities.Group;
import entities.User;
import repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GroupMapper {

    private static UserRepository userRepository;

    @Autowired
    public GroupMapper(UserRepository userRepository) {
        GroupMapper.userRepository = userRepository;
    }

    public static GroupDto toDto(Group group) {
        if (group == null) return null;

        GroupDto dto = new GroupDto();
        dto.setId(group.getId());
        dto.setName(group.getName());
        dto.setTokenKey(group.getTokenKey());
        dto.setCreationDate(group.getCreationDate());
        if (group.getCreatedBy() != null) {
            dto.setCreatedByUserId(group.getCreatedBy().getId());
        }
        if (group.getMembers() != null) {
            dto.setMemberIds(group.getMembers().stream()
                    .map(User::getId)
                    .collect(Collectors.toList()));
        }
        return dto;
    }

    public static Group toEntity(GroupDto dto) {
        if (dto == null) return null;

        Group group = new Group();
        group.setId(dto.getId());
        group.setName(dto.getName());
        group.setTokenKey(dto.getTokenKey());
        group.setCreationDate(dto.getCreationDate());
        if (dto.getCreatedByUserId() != null) {
            userRepository.findById(dto.getCreatedByUserId()).ifPresent(group::setCreatedBy);
        }
        if (dto.getMemberIds() != null) {
            List<User> members = dto.getMemberIds().stream()
                    .map(id -> userRepository.findById(id).orElse(null))
                    .filter(user -> user != null)
                    .collect(Collectors.toList());
            group.setMembers(members);
        }
        return group;
    }
}