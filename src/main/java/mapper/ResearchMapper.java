package mapper;

import dto.ResearchDto;
import entities.Research;
import entities.User;
import repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ResearchMapper {

    private static UserRepository userRepository;

    @Autowired
    public ResearchMapper(UserRepository userRepository) {
        ResearchMapper.userRepository = userRepository;
    }

    public static ResearchDto toDto(Research research) {
        if (research == null) return null;

        ResearchDto dto = new ResearchDto();
        dto.setId(research.getId());
        dto.setName(research.getName());
        dto.setSubject(research.getSubject());
        dto.setDescription(research.getDescription());
        dto.setTags(research.getTags());
        if (research.getCreatedBy() != null) {
            dto.setCreatedByUserId(research.getCreatedBy().getId());
        }
        // TODO: map questions
        return dto;
    }

    public static Research toEntity(ResearchDto dto) {
        if (dto == null) return null;

        Research research = new Research();
        research.setId(dto.getId());
        research.setName(dto.getName());
        research.setSubject(dto.getSubject());
        research.setDescription(dto.getDescription());
        research.setTags(dto.getTags());
        if (dto.getCreatedByUserId() != null) {
            userRepository.findById(dto.getCreatedByUserId()).ifPresent(research::setCreatedBy);
        }
        // TODO: map questions
        return research;
    }
}