import React from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import youtube from "./apis/youtube";

class App extends React.Component {
  state = { videos: [] };
  // We use this callback prop passed down to our child component that collects
  // inputs state "a searched term" that App can then pass into a API request.
  onTermSubmit = async (term) => {
    // The `term` from child input component <SearchBar />.
    // We use our pre-configured axios instance to the following path/endpoint:
    // The term we using in our youtube API query is coming from child state.
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
