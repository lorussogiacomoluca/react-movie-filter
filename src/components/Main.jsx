import React from "react";

const Main = ({ filtredMovies }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {filtredMovies.map((movie, index) => (
              <li
                key={index}
                className="list-group-item mb-3 border rounded shadow-sm p-3 bg-light"
              >
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-solid fa-clapperboard me-2 text-primary"></i>
                  <strong className="me-2">Titolo:</strong>
                  <span className="text-dark">{movie.title}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-tags me-2 text-secondary"></i>
                  <strong className="me-2">Genere:</strong>
                  <span className="text-muted">{movie.genre}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
