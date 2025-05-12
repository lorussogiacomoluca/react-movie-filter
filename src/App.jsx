import React from "react";
import List from "./assets/list";

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
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
