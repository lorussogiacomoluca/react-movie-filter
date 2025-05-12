import React from "react";

const SearchForm = ({ searchTitolo, setSearchTitolo }) => {
  return (
    <div className="col">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un titolo.."
          onChange={(e) => setSearchTitolo(e.target.value)}
        />
        <span className="input-group-text" id="basic-addon1">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchForm;
