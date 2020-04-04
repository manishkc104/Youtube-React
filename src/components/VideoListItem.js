import React from "react";
import { styled } from "styletron-react";
import Flex from "./Flex";

const VideoListCard = styled("div", () => ({
  display: "flex",
  marginLeft: "2rem",
  marginBottom: "2rem",
  flexDirection: "column",
  padding: "4rem",
  boxShadow:
    "rgba(1, 1, 1, 0.05) 0px 0px 1px, rgba(1, 1, 1, 0.06) 0px 0px 10px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  fontSize: "1.6rem"
}));

const ImageContainer = styled("div", () => ({
  marginRight: "1.2rem"
}));

const VideoItemList = ({ video, onVideoClick }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <VideoListCard onClick={() => onVideoClick(video)}>
      <Flex>
        <ImageContainer>
          <img src={imageUrl} alt={"image"} />
        </ImageContainer>
        <span>{video.snippet.title}</span>
      </Flex>
    </VideoListCard>
  );
};

export default VideoItemList;
