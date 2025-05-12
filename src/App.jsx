import React from "react";
import List

const App = () => {
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
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cerca un film.."
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  id="button-addon1"
                >
                  Cerca
                </button>
              </div>
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
