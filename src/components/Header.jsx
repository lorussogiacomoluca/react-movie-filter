import React from "react";
import SelectForm from "./SelectForm";
import SearchForm from "./SearchForm";

const Header = ({
  searchGenere,
  movieGenres,
  setSearchGenere,
  searchTitolo,
  setSearchTitolo,
}) => {
  return (
    <>
      <div className="row mb-5 text-primary">
        <div className="col">
          <h1>
            <i className="fa-solid fa-film me-4"></i>
            Movie Filter
          </h1>
        </div>
        <SearchForm
          searchTitolo={searchTitolo}
          setSearchTitolo={setSearchTitolo}
        />
        <SelectForm
          searchGenere={searchGenere}
          setSearchGenere={setSearchGenere}
          movieGenres={movieGenres}
        />
      </div>
    </>
  );
};

export default Header;
