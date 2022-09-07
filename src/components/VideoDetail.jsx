import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { thumbnails, title, description } = video.snippet;
  const { videoId } = video.id;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video-player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
        {/* <img src={thumbnails.high.url} alt={title} /> */}
      </div>
    </div>
  );
};

export default VideoDetail;
