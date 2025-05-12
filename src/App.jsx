import React, { useState, useEffect } from "react";
import List from "./assets/List";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const movieGenres = [...new Set(List.map((movie) => movie.genre))];
  const [search, setSearch] = useState("");
  const [filtredMovies, setFiltredMovies] = useState(List);

  useEffect(() => {
    if (search) {
      const filtredMovies = List.filter((movie) => movie.genre === search);
      setFiltredMovies(filtredMovies);
    } else {
      setFiltredMovies(List);
    }
  }, [search]);

  return (
    <>
      <div className="container mt-4">
        <div>
          <Header
            search={search}
            setSearch={setSearch}
            movieGenres={movieGenres}
          />
          <Main filtredMovies={filtredMovies} />
        </div>
      </div>
    </>
  );
};

export default App;
