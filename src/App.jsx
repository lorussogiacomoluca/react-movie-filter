import React, { useState, useEffect } from "react";
import List from "./assets/List";

const App = () => {
  const movieGenres = [...new Set(List.map((movie) => movie.genre))];
  const [search, setSearch] = useState("");
  const [filtredMovies, setFiltredMovies] = useState(List);

  useEffect(() => {
    if (search) {
      const filtredMovies = movies.filter((movie) => movie.genre === search);
      setFiltredMovies(filtredMovies);
    } else {
      setFiltredMovies(List);
    }
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="container mt-4">
        <div>
          <div className="row mb-5 text-primary">
            <div className="col">
              <h1>
                <i className="fa-solid fa-film me-4"></i>
                Movie Filter
              </h1>
            </div>
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
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-group">
                {filtredMovies.map((movie, index) => (
                  <li key={index} className="list-group-item">
                    <div>
                      <h3 className="d-inline-block">Titolo: </h3>
                      <span>{movie.title}</span>
                    </div>
                    <h5 className="d-inline-block">Genere: </h5>
                    <span>{movie.genre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
