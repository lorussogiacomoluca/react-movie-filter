import React from "react";
import SelectForm from "./SelectForm";

const Main = ({ filtredMovies, newTitle, setNewTitle, addMovie }) => {
  return (
    <div className="row d-flex">
      <div className="col-8">
        <ul className="list-group">
          {filtredMovies.map((movie, index) => (
            <li
              key={index}
              className="list-group-item mb-3 border rounded shadow-sm p-3"
            >
              <div className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-clapperboard me-2 text-primary"></i>
                <strong className="me-2">Titolo:</strong>
                <span>{movie.title}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-tags me-2 text-secondary"></i>
                <strong className="me-2">Genere:</strong>
                <span>{movie.genre}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-4">
        <form onSubmit={addMovie}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci il titolo del film"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              id="button-addon2"
            >
              Aggiungi <i className="fa-solid fa-upload"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
