import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import TextStyle from "../atom/Text";
import PerformanceMiniPoster from "../molecule/PerformanceMiniPoster";
import CategoryDivider from "../atom/CategoryDivider";
import { fetchPerformance } from "../../apis/performance";
import ReviewForm from "../organism/ReviewForm";
import { useParams } from "react-router-dom";

export default function WriteReview() {
  const { id } = useParams();
  const [perfoInfo, setPerfoInfo] = useState([]);

  useEffect(() => {
    fetchPerformance(id, getPerfoInfoSuccess, getPerfoInfoFail);
  }, [id]);

  function getPerfoInfoSuccess(res) {
    console.log("리뷰 공연 정보 요청 성공");
    setPerfoInfo(res.data);
  }

  function getPerfoInfoFail(err) {
    console.log("리뷰 공연 정보 요청 실패", err);
  }

  return (
    <Box>
      <PerformanceMiniPoster
        img={perfoInfo?.performance?.poster}
        title={perfoInfo?.performance?.name}
        // date={perfoInfo?.performance?.endDate}
      />
      <Box sx={{ width: "90%", margin: "auto", mt: 3 }}>
        <TextStyle variant="black" size="medium" weight="">
          ✍🏼 후기 작성
        </TextStyle>
        <CategoryDivider type="dark"></CategoryDivider>
        <TextStyle variant="black" size="smaller" weight="lighter">
          {"관람한 공연에 대한 후기를 공유해주세요"}
        </TextStyle>
      </Box>
      {/* 리뷰 폼 */}
      <ReviewForm id={id}></ReviewForm>
    </Box>
  );
}
