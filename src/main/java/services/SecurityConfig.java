package services;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import repositories.UserRepository;

import java.util.Arrays;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Disable CSRF (stateless API) and enable CORS
        http.csrf(csrf -> csrf.disable());
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        // Authorize requests: open registration/auth/public, protect API by default
        http.authorizeHttpRequests(auth -> auth
                // CORS preflight
                .requestMatchers(new AntPathRequestMatcher("/**", HttpMethod.OPTIONS.name())).permitAll()
                // Public API endpoints
                .requestMatchers(new AntPathRequestMatcher("/api/auth/**")).permitAll()
                // Permit registration endpoint (any method to be safe)
                .requestMatchers(new AntPathRequestMatcher("/api/users/register")).permitAll()
                .requestMatchers(new AntPathRequestMatcher("/api/test/public")).permitAll()
                // Actuator
                .requestMatchers(
                        new AntPathRequestMatcher("/actuator/health/**"),
                        new AntPathRequestMatcher("/actuator/info")
                ).permitAll()
                // Swagger / OpenAPI
                .requestMatchers(
                        new AntPathRequestMatcher("/v3/api-docs/**"),
                        new AntPathRequestMatcher("/swagger-ui/**"),
                        new AntPathRequestMatcher("/swagger-ui.html")
                ).permitAll()
                // Static/frontend resources
                .requestMatchers(
                        new AntPathRequestMatcher("/"),
                        new AntPathRequestMatcher("/index.html"),
                        new AntPathRequestMatcher("/static/**"),
                        new AntPathRequestMatcher("/assets/**"),
                        new AntPathRequestMatcher("/frontend/**"),
                        new AntPathRequestMatcher("/VAADIN/**")
                ).permitAll()
                // Any other actuator endpoints require authentication
                .requestMatchers(new AntPathRequestMatcher("/actuator/**")).authenticated()
                // Everything else under /api/** requires authentication
                .requestMatchers(new AntPathRequestMatcher("/api/**")).authenticated()
                // Any non-api requests are permitted (serving frontend/dev tools)
                .anyRequest().permitAll());

        // Enable HTTP Basic auth for simple credentials verification
        http.httpBasic(customizer -> {});
        http.formLogin(form -> form.disable());

        // Return 401 for unauthorized API access instead of redirecting
        http.exceptionHandling(ex -> ex.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));

        // Stateless session management
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // Configure frame options for H2 console
        http.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()));

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        return username -> {
            System.out.println("Loading user: " + username);
            return userRepository.findByEmail(username)
                    .map(u -> {
                        System.out.println("User loaded: " + u.getEmail() + ", password: " + u.getPassword());
                        return org.springframework.security.core.userdetails.User
                                .withUsername(u.getEmail())
                                .password(u.getPassword())
                                .roles(u.getRole().name())
                                .build();
                    })
                    .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        };
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // Allow any dev origin; Spring will echo the Origin when using patterns (works with credentials)
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        
        // Add exposed headers if needed
        configuration.setExposedHeaders(Arrays.asList("Authorization", "Content-Type"));
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
