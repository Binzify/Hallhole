import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Text from "../atom/Text";
import Box from "@mui/material/Box";
import PosterSize from "../atom/PosterSize";
import Input from "../atom/Input";
import TwitterBox from "../organism/TwitterBox";
import LikePerformance from "../molecule/LikePerformance";
import Button from "../atom/Button";

const likePerformanceList = [
  {
    id: 1,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 2,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 3,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 4,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 5,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 6,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
  {
    id: 7,
    title: "웃는 남자",
    img: "https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg",
  },
];

const userCheckBox = {
  position: "absolute",
  zIndex: 1,
  top: "60px",
};

const userCheckText = {
  position: "absolute",
  zIndex: 1,
};

const userCheck = {
  marginLeft: "3rem",
  marginTop: "15px",
};

const userCheckOpacity = {
  backgroundColor: "#e37373",
  opacity: 0.6,
  width: "412px",
  height: "100px",
};

const backGroundPoster = {
  width: "100%",
  height: "548px",
  backgroundImage: `url("https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg")`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: -100,
  backgroundPositionY: -100,
  filter: "blur(8px)",
};

const posterPosition = {
  position: "relative",
  top: "-400px",
};

const posterCard = {
  maxWidth: 300,
  maxHeight: 400,
  boxShadow: 6,
  marginTop: 5,
  marginLeft: 6.8,
};

const textQuestionDesign = {
  marginLeft: 8,
  marginTop: 8,
  marginBottom: 5,
};

const inputPosition = {
  marginLeft: 5,
  marginY: 2,
};

const inputPositionDetail = {
  marginLeft: 3,
};

const TwitterBoxBackground = {
  marginTop: 15,
  paddingTop: 10,
  paddingBottom: 2,
  backgroundColor: "rgba(255, 0, 0, 0.2)",
};

export default function Main() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "200vh",
      }}
    >
      <Box sx={userCheckBox}>
        <Box>
          <Box sx={userCheckText}>
            <Box sx={userCheck}>
              <Text variant="white" size="medium">
                <Text variant="primary" size="large">
                  유저 네임
                </Text>
                님<br />이 채팅에 참여중이었어요!
              </Text>
            </Box>
          </Box>
          <Box sx={userCheckOpacity}></Box>
        </Box>
      </Box>
      <Box sx={backGroundPoster}></Box>
      <Box sx={posterPosition}>
        <Card sx={posterCard}>
          <CardActionArea>
            <PosterSize
              size="large"
              src="https://cdnticket.melon.co.kr/resource/image/upload/product/2019/11/2019112812171593082da1-3771-458f-ab20-7777146d2066.jpg"
            ></PosterSize>
          </CardActionArea>
        </Card>

        <Box sx={textQuestionDesign}>
          <Text variant="black" size="medium">
            찾고있는
            <Text variant="primary"> 뮤지컬 </Text>이 있나요?
          </Text>
        </Box>
        <Box sx={inputPosition}>
          <Box sx={inputPositionDetail}>
            <Input size="large"></Input>
          </Box>
        </Box>
        <Box sx={{ marginY: 10 }}>
          <LikePerformance likePerformances={likePerformanceList} />
        </Box>

        <Box sx={{ marginY: 10, marginLeft: 5 }}>
          <Text variant="black" size="medium">
            내가 팔로우한 <br />
            <Text variant="primary">유저 네임</Text>
            님이 후기를 남겼어요.
          </Text>
        </Box>
        <Box>
          <Button variant="white" size="large"></Button>
        </Box>

        <Box sx={TwitterBoxBackground}>
          <TwitterBox></TwitterBox>
          <Box sx={{ marginLeft: 12, marginTop: 20, marginBottom: 5 }}>
            <Text>@2022 footer position</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
