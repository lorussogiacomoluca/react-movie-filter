import React, { useState, useEffect } from "react";
import List from "./assets/List";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [movies, setMovies] = useState(List);

  const movieGenres = [...new Set(List.map((movie) => movie.genre))];
  const [searchGenere, setSearchGenere] = useState("");
  const [filtredMovies, setFiltredMovies] = useState(List);
  const [searchTitolo, setSearchTitolo] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newGenere, setNewGenere] = useState("");
  const addMovie = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    const genre = newGenere;
    const updated = [...movies, { title, genre }];
    setMovies(updated);
    setNewTitle("");
  };

  useEffect(() => {
    let filtered = movies;
    if (searchGenere) {
      filtered = filtered.filter((movie) => movie.genre === searchGenere);
    }
    if (searchTitolo) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitolo.toLowerCase())
      );
    }
    setFiltredMovies(filtered);
  }, [searchGenere, searchTitolo, movies]);

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
          <Main
            filtredMovies={filtredMovies}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            addMovie={addMovie}
            newGenere={newGenere}
            setNewGenere={setNewGenere}
            movieGenres={movieGenres}
          />
        </div>
      </div>
    </>
  );
};

export default App;
