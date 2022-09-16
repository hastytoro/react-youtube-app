import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onTermSubmit(term);
  };
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="ui segment raised search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <div className="ui transparent left icon input">
            <input
              onChange={onInputChange}
              value={term}
              type="text"
              placeholder="Video search..."
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
