import React from "react";
import VideoItemList from "./VideoListItem";

const VideoList = props => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map(video => (
        <VideoItemList
          key={video.etag}
          video={video}
          onVideoClick={props.onVideoSelect}
        />
      ))}
    </ul>
  );
};

export default VideoList;
