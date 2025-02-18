package com.freuse.freuse.domain.community.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class CommunityImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id", nullable = false)
    private Community community;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;

    public CommunityImage(Community community, byte[] imageData) {
        this.community = community;
        this.imageData = imageData;
    }
}
