package controllers;

import dto.ResearchDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.ResearchService;

import java.util.List;

@RestController
@RequestMapping("/api/Researches")
public class ResearchController {

    private final ResearchService researchService;

    public ResearchController(ResearchService researchService) {
        this.researchService = researchService;
    }

    // Get all researches
    @GetMapping
    public ResponseEntity<List<ResearchDto>> getAllResearches() {
        return ResponseEntity.ok(researchService.getAllResearches());
    }

    // Get researches by current user
    @GetMapping("/my")
    public ResponseEntity<List<ResearchDto>> getMyResearches() {
        return ResponseEntity.ok(researchService.getResearchesByCurrentUser());
    }

    // Search researches
    @GetMapping("/search")
    public ResponseEntity<List<ResearchDto>> searchResearches(@RequestParam(required = false) String query) {
        return ResponseEntity.ok(researchService.searchResearches(query));
    }

    // Get research by ID
    @GetMapping("/{id}")
    public ResponseEntity<ResearchDto> getResearch(@PathVariable Long id) {
        return researchService.getResearchById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new research
    @PostMapping
    public ResponseEntity<ResearchDto> createResearch(@RequestBody ResearchDto researchDto) {
        ResearchDto created = researchService.createResearch(researchDto);
        return ResponseEntity.ok(created);
    }

    // Update research
    @PutMapping("/{id}")
    public ResponseEntity<ResearchDto> updateResearch(@PathVariable Long id, @RequestBody ResearchDto researchDto) {
        return researchService.updateResearch(id, researchDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete research
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResearch(@PathVariable Long id) {
        if (researchService.deleteResearch(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // TODO: Add endpoints for results
}