package com.ssafy.hallhole.chat.domain;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "chat")
public class ChatLog {

    @Id
    private String id;

    @NotNull
    private String performanceId;

    @NotNull
    private Long memberId;

    @NotNull
    private String message;

    @NotNull
    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private ChatType type;

    @CreationTimestamp
    private LocalDateTime messageTime;

    @NotNull
    private String idTag;

    @NotNull
    @Column(length = 10)
    private String background;

    @NotNull
    @Column(length = 25)
    private String characterType;

    @Column(length = 10)
    private String accessoryType;

    @NotNull
    @Builder.Default
    @ColumnDefault("false")
    private boolean isUpdated = false;
}
