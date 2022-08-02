import React from "react";
import { styled } from "@mui/system";

const CustomText = styled('span')({
  // Text를 사용할 때 size와variant를 지정해 줘야하며
  // 사이즈는 large, medium, small 있으며 각각 30px, 22px, 16px 크기이다.
  // 색상은 primary, white, black 이다.
  color: "black",
  display: "inline-block",
  fontFamily: "Helvetica Neue",
  margin: 3,
});

export default function TextStyle({ children, variant }) {
  // 색상은 primary, white, black 이며
  // primary, white는 variant 값을 적용해야 하며
  // 없으면 black으로 색상이 지정된다.
  if (variant === "primary") {
    return <CustomText sx={{ fontWeight: "bold", color: "primary.main" }}>{children}</CustomText>;
  } else if (variant === "white") {
    return <CustomText sx={{ fontWeight: "bold", color: "white" }}>{children}</CustomText>;
  } else {
    return <CustomText sx={{ fontWeight: "bold", color: "black" }}>{children}</CustomText>;
  }
}
