import React from "react";

function SearchBar(props) {
  return (
    <div className="col-12">
      <input
        type="text"
        value={props.searchValue}
        placeholder="Search..."
        onChange={(event) => props.setSearchValue(event.target.value)}
        className="form-control"
      />
    </div>
  );
}

export default SearchBar;