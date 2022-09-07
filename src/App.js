import React from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import youtube from "./apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // We use this callback prop passed down to our child component that collects
  // inputs state "a searched term" that App can then pass into a API request.
  onTermSubmit = async (term) => {
    // Retrieve `term` from child input component <SearchBar />.
    // The term we using in our youtube API query is coming from child state.
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
  };
  // Again here we adding another callback method to the App component.
  // We pass a prop as reference down first to VideoList then to VideoItem.
  // This will be called back with information of the selected item.
  onVideoSelect = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        <VideoDetail />
      </div>
    );
  }
}
export default App;
