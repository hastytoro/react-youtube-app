import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="ui active centered inline loader"></div>;
  }
  const { title, description } = video.snippet;
  const { videoId } = video.id;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <>
      <div className="ui embed">
        <iframe src={videoSrc} title="video-player" />
      </div>
      <div className="ui segment raised">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
