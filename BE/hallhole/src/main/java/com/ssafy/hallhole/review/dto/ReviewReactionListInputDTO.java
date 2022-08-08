package com.ssafy.hallhole.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewReactionListInputDTO {

    private int start;

    private int size;

    private String memberTag;

}
