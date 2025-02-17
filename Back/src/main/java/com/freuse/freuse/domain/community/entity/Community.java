package com.freuse.freuse.domain.community.entity;


import com.freuse.freuse.domain.user.entity.User;
import com.freuse.freuse.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="community")
@Getter
@Setter
public class Community extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String detailedCategory;

    @Column(nullable = false)
    private String item;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;


    public String getUsername() {
        return user != null ? user.getUsername() : null;
    }
}
