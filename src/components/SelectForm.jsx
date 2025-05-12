import React from "react";

const SelectForm = ({ searchGenere, movieGenres, setSearchGenere }) => {
  return (
    <div className="col">
      <select
        className="form-select"
        onChange={(e) => setSearchGenere(e.target.value)}
        value={searchGenere}
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
