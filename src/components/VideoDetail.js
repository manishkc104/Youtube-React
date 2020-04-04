import React from "react";
import { styled } from "styletron-react";

const VideoContainer = styled("div", () => ({
  display: "flex",
  flexDirection: "column"
}));

const VideoDetailsCard = styled("div", () => ({
  marginTop: "2rem",
  padding: "4rem",
  boxShadow:
    "rgba(1, 1, 1, 0.05) 0px 0px 1px, rgba(1, 1, 1, 0.06) 0px 0px 10px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  fontSize: "1.6rem"
}));

const Title = styled("h3", () => ({
  fontSize: "2rem",
  color: "#212121",
  marginBottom: "3rem"
}));

const YoutubeVideoContainer = styled("div", () => ({
  position: "relative",
  display: "block",
  width: "104rem",
  height: "60rem",
  padding: 0,
  overflow: "hidden",

  "::before": {
    display: "block",
    content: ""
  }
}));
const YoutubeVideo = styled("iframe", () => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: 0
}));

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoContainer>
      <YoutubeVideoContainer>
        <YoutubeVideo src={url} />
      </YoutubeVideoContainer>
      <VideoDetailsCard>
        <Title>{video.snippet.title}</Title>
        <span>{video.snippet.description}</span>
      </VideoDetailsCard>
    </VideoContainer>
  );
};

export default VideoDetail;
