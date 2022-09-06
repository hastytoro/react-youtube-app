import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    // HERE WE MAKE SURE TO INVOKE A CALLBACK FROM PARENT COMPONENT.
    // We can tell our parent App that the user just submitted a form and that
    // they probably want to initiate a new search of the youtube API.
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui segment raised search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui transparent left icon input">
              <input
                onChange={this.onInputChange}
                value={this.state.term}
                type="text"
                placeholder="Video search..."
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
