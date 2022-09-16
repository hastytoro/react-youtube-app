import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import youtube from "./apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // We use this callback prop passed down to our child component that collects
  // inputs state "a searched term" that App can then pass into a API request.
  // Retrieve `term` from child input component <SearchBar />.
  // The term we using in our youtube API query is coming from child state.
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    const { items } = response.data;
    setVideos(items);
    setSelectedVideo(items[0]);
  };

  useEffect(() => {
    onTermSubmit("skysports");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
