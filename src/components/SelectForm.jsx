import React from "react";

const SelectForm = ({ search, movieGenres, setSearch }) => {
  return (
    <div className="col">
      <select
        className="form-select"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      >
        <option defaultValue value={""}>
          Seleziona un genere..
        </option>
        {movieGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
