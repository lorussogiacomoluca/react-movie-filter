import React from "react";
import SelectForm from "./SelectForm";

const Header = ({ search, movieGenres, setSearch }) => {
  return (
    <>
      <div className="row mb-5 text-primary">
        <div className="col">
          <h1>
            <i className="fa-solid fa-film me-4"></i>
            Movie Filter
          </h1>
        </div>
        <SelectForm
          search={search}
          setSearch={setSearch}
          movieGenres={movieGenres}
        />
      </div>
    </>
  );
};

export default Header;
