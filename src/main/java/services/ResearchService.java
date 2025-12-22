package services;

import dto.ResearchDto;
import entities.Research;
import entities.User;
import mapper.ResearchMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repositories.ResearchRepository;
import repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResearchService {

    private final ResearchRepository researchRepository;
    private final UserRepository userRepository;

    public ResearchService(ResearchRepository researchRepository, UserRepository userRepository) {
        this.researchRepository = researchRepository;
        this.userRepository = userRepository;
    }

    // Get all researches
    public List<ResearchDto> getAllResearches() {
        return researchRepository.findAll()
                .stream()
                .map(ResearchMapper::toDto)
                .collect(Collectors.toList());
    }

    // Get researches by current user (leader)
    public List<ResearchDto> getResearchesByCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return researchRepository.findByCreatedBy(user.get())
                    .stream()
                    .map(ResearchMapper::toDto)
                    .collect(Collectors.toList());
        }
        return List.of();
    }

    // Get research by ID
    public Optional<ResearchDto> getResearchById(Long id) {
        return researchRepository.findById(id)
                .map(ResearchMapper::toDto);
    }

    // Create new research
    @Transactional
    public ResearchDto createResearch(ResearchDto researchDto) {
        Research research = ResearchMapper.toEntity(researchDto);
        if (research.getCreatedBy() == null) {
            // Set current user as creator
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            userRepository.findByEmail(email).ifPresent(research::setCreatedBy);
        }
        research = researchRepository.save(research);
        return ResearchMapper.toDto(research);
    }

    // Update research
    @Transactional
    public Optional<ResearchDto> updateResearch(Long id, ResearchDto researchDto) {
        return researchRepository.findById(id).map(research -> {
            if (researchDto.getName() != null) research.setName(researchDto.getName());
            if (researchDto.getSubject() != null) research.setSubject(researchDto.getSubject());
            if (researchDto.getDescription() != null) research.setDescription(researchDto.getDescription());
            if (researchDto.getTags() != null) research.setTags(researchDto.getTags());
            // TODO: update questions
            return ResearchMapper.toDto(researchRepository.save(research));
        });
    }

    // Delete research
    @Transactional
    public boolean deleteResearch(Long id) {
        if (researchRepository.existsById(id)) {
            researchRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Search researches by name or subject
    public List<ResearchDto> searchResearches(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllResearches();
        }
        // Assuming repository has a method for this
        return researchRepository.findByNameContainingIgnoreCaseOrSubjectContainingIgnoreCase(query, query)
                .stream()
                .map(ResearchMapper::toDto)
                .collect(Collectors.toList());
    }
}