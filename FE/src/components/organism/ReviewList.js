import React from "react";

import ReviewItem from "../molecule/ReviewItem";
import CategoryDivider from "../atom/CategoryDivider";
import { Box } from "@mui/system";
import TextStyle from "../atom/Text";
import ButtonStyle from "../atom/Button";

export default function ReviewList({ performanceReviewList }) {
  function checkReviewList() {
    return performanceReviewList === [];
  }

  return (
    <Box>
      <CategoryDivider type="negative" />
      <Box sx={{ my: 2 }}>
        <ButtonStyle size="large" variant="primary">
          후기 작성
        </ButtonStyle>
      </Box>
      <TextStyle size="medium" variant="primary">
        관람 후기
      </TextStyle>
      {checkReviewList() ? (
        <Box>
          {performanceReviewList.map((item, i) => (
            <ReviewItem
              key={i}
              title={item.title}
              written_date={item.writing_time}
              star_eval={item.star_eval}
              user={item.name}
              writerTag={item.writerTag}
              id={item.id}
            ></ReviewItem>
          ))}
        </Box>
      ) : (
        <Box sx={{ margin: "auto", width: "75%", mt: 3 }}>
          <TextStyle variant="grey" size="medium">
            {"아직 작성된 후기가 없어요 :)"}
          </TextStyle>
        </Box>
      )}
    </Box>
  );
}
