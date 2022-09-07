import React from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import youtube from "./apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("racing");
  }

  // We use this callback prop passed down to our child component that collects
  // inputs state "a searched term" that App can then pass into a API request.
  onTermSubmit = async (term) => {
    // Retrieve `term` from child input component <SearchBar />.
    // The term we using in our youtube API query is coming from child state.
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    const { items } = response.data;
    this.setState({
      videos: items,
      selectedVideo: items[0],
    });
  };
  // Again here we adding another callback method to the App component.
  // We pass a prop as reference down first to VideoList then to VideoItem.
  // This will be called back with information of the selected item.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
