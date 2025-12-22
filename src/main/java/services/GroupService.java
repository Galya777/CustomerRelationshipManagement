package services;

import dto.GroupDto;
import entities.Group;
import entities.User;
import mapper.GroupMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repositories.GroupRepository;
import repositories.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GroupService {

    private final GroupRepository groupRepository;
    private final UserRepository userRepository;

    public GroupService(GroupRepository groupRepository, UserRepository userRepository) {
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

    // Get all groups
    public List<GroupDto> getAllGroups() {
        return groupRepository.findAll()
                .stream()
                .map(GroupMapper::toDto)
                .collect(Collectors.toList());
    }

    // Get group by ID
    public Optional<GroupDto> getGroupById(Long id) {
        return groupRepository.findById(id)
                .map(GroupMapper::toDto);
    }

    // Create new group
    @Transactional
    public GroupDto createGroup(GroupDto groupDto) {
        Group group = GroupMapper.toEntity(groupDto);
        if (group.getCreationDate() == null) {
            group.setCreationDate(LocalDate.now());
        }
        if (group.getCreatedBy() == null) {
            // Set current user as creator
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            userRepository.findByEmail(email).ifPresent(group::setCreatedBy);
        }
        group = groupRepository.save(group);
        return GroupMapper.toDto(group);
    }

    // Update group
    @Transactional
    public Optional<GroupDto> updateGroup(Long id, GroupDto groupDto) {
        return groupRepository.findById(id).map(group -> {
            if (groupDto.getName() != null) group.setName(groupDto.getName());
            if (groupDto.getTokenKey() != null) group.setTokenKey(groupDto.getTokenKey());
            if (groupDto.getMemberIds() != null) {
                List<User> members = groupDto.getMemberIds().stream()
                        .map(userId -> userRepository.findById(userId).orElse(null))
                        .filter(user -> user != null)
                        .collect(Collectors.toList());
                group.setMembers(members);
            }
            return GroupMapper.toDto(groupRepository.save(group));
        });
    }

    // Delete group
    @Transactional
    public boolean deleteGroup(Long id) {
        if (groupRepository.existsById(id)) {
            groupRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Search groups by name
    public List<GroupDto> searchGroups(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllGroups();
        }
        return groupRepository.findByNameContainingIgnoreCase(query)
                .stream()
                .map(GroupMapper::toDto)
                .collect(Collectors.toList());
    }

    // Add member to group
    @Transactional
    public boolean addMemberToGroup(Long groupId, Long userId) {
        Optional<Group> groupOpt = groupRepository.findById(groupId);
        Optional<User> userOpt = userRepository.findById(userId);
        if (groupOpt.isPresent() && userOpt.isPresent()) {
            Group group = groupOpt.get();
            User user = userOpt.get();
            if (!group.getMembers().contains(user)) {
                group.getMembers().add(user);
                groupRepository.save(group);
                return true;
            }
        }
        return false;
    }

    // Remove member from group
    @Transactional
    public boolean removeMemberFromGroup(Long groupId, Long userId) {
        Optional<Group> groupOpt = groupRepository.findById(groupId);
        Optional<User> userOpt = userRepository.findById(userId);
        if (groupOpt.isPresent() && userOpt.isPresent()) {
            Group group = groupOpt.get();
            User user = userOpt.get();
            if (group.getMembers().contains(user)) {
                group.getMembers().remove(user);
                groupRepository.save(group);
                return true;
            }
        }
        return false;
    }
}