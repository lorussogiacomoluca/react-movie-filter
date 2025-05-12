import React, { useState, useEffect } from "react";
import List from "./assets/List";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const movieGenres = [...new Set(List.map((movie) => movie.genre))];
  const [searchGenere, setSearchGenere] = useState("");
  const [filtredMovies, setFiltredMovies] = useState(List);
  const [searchTitolo, setSearchTitolo] = useState("");

  useEffect(() => {
    let filtered = List;

    if (searchGenere) {
      filtered = filtered.filter((movie) => movie.genre === searchGenere);
    }

    if (searchTitolo) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitolo.toLowerCase())
      );
    }

    setFiltredMovies(filtered);
  }, [searchGenere, searchTitolo]);

  return (
    <>
      <div className="container mt-4">
        <div>
          <Header
            searchGenere={searchGenere}
            setSearchGenere={setSearchGenere}
            movieGenres={movieGenres}
            searchTitolo={searchTitolo}
            setSearchTitolo={setSearchTitolo}
          />
          <Main filtredMovies={filtredMovies} />
        </div>
      </div>
    </>
  );
};

export default App;
