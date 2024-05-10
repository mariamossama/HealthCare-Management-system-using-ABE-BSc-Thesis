package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @SequenceGenerator(name = "user_seq", initialValue = 3, sequenceName = "user_seq", allocationSize = 1)
    private Long id;
    @Column(unique = true)
    @NotBlank(message = "The Name Field Is Required")
    private String name;
    @Column(unique = true)
    @NotBlank(message = "The Email Field Is Required")
    @Email(message = "This Field Should Be Email")
    private String email;
    @NotBlank(message = "The Phone Field Is Required")
    private String phone;
    @Column(name = "is_active", columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isActive;
    @JsonIgnore
    private String password;
    @ManyToOne()
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    @NotNull(message = "The Role Is Required")
    private Role role;

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        String userData = "{" +
                "\"id\": " + id +
                ", \"name\": \"" + name + "\"" +
                ", \"email\": \"" + email + "\"" +
                ", \"role\" : \"" + role.getName() + "\"" +
                "}";
        return userData;
    }
}

