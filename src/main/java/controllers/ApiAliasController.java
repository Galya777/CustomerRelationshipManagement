package controllers;

import dto.LoginRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import repositories.ResearchResultRepository;
import services.UserService;

import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiAliasController {

    private final UserService userService;
    private final ResearchResultRepository researchResultRepository;

    public ApiAliasController(UserService userService, ResearchResultRepository researchResultRepository) {
        this.userService = userService;
        this.researchResultRepository = researchResultRepository;
    }

    // Alias for login as per assignment spec
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        boolean ok = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        if (!ok) {
            Map<String, String> err = new HashMap<>();
            err.put("error", "Invalid username or password");
            return ResponseEntity.badRequest().body(err);
        }
        // Issue a simple pseudo token placeholder (stateless basic-auth also supported by SecurityConfig)
        Map<String, String> res = new HashMap<>();
        res.put("token", "basic-auth");
        res.put("message", "Login successful");
        return ResponseEntity.ok(res);
    }

    // Alias for logout; stateless API, so just respond OK
    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        Map<String, String> res = new HashMap<>();
        res.put("message", "Logged out");
        return ResponseEntity.ok(res);
    }

    // SSE endpoint for active researches progress as per assignment spec
    // Emits a heartbeat with a simple statistics payload
    @GetMapping(path = "/active-Reseachs", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<Map<String, Object>>> activeReseachs() {
        return Flux.interval(Duration.ofSeconds(2))
                .map(seq -> {
                    Map<String, Object> payload = new HashMap<>();
                    payload.put("timestamp", Instant.now().toString());
                    payload.put("totalResearchResults", researchResultRepository.count());
                    return ServerSentEvent.<Map<String, Object>>builder()
                            .id(Long.toString(seq))
                            .event("research-progress")
                            .data(payload)
                            .build();
                });
    }
}
