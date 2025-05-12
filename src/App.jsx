import React from "react";
import List from "./assets/List";

const App = () => {
  const movieGenres = [...new Set(List.map((movie) => movie.genre))];
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
              <select className="form-select">
                <option defaultValue={true}>Seleziona un genere..</option>
                {movieGenres.map((genre, index) => (
                  <option key={index} value="{genre}">
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-group">
                {List.map((movie, index) => (
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
