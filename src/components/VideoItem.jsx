import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const { thumbnails, title, description } = video.snippet;
  return (
    <div className="video-item item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
