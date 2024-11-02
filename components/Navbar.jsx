import React, { useContext } from "react";
import pixaayContext from "../src/Context/PixaayContext";
import "./navbar.css";
const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(pixaayContext);
  return (
    <>
      <div className=" container text-center my-2">
        <button
          onClick={() => fetchImageByCategory("odisha")}
          type="button"
          className="btn btn-outline-primary"
        >
          Odisha
        </button>
        <button
          onClick={() => fetchImageByCategory("nature")}
          type="button"
          className="btn btn-outline-light"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImageByCategory("science")}
          type="button"
          className="btn btn-outline-info"
        >
          Science
        </button>
        <button
          onClick={() => fetchImageByCategory("computer")}
          type="button"
          className="btn btn-outline-danger"
        >
          Computer
        </button>
        <button
          onClick={() => fetchImageByCategory("buildings")}
          type="button"
          className="btn btn-outline-warning"
        >
          Buildings
        </button>
        <button
          onClick={() => fetchImageByCategory("sports")}
          type="button"
          className="btn btn-outline-info"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImageByCategory("food")}
          type="button"
          className="btn btn-outline-light"
        >
          Food
        </button>
        <button
          onClick={() => fetchImageByCategory("travel")}
          type="button"
          className="btn btn-outline-primary"
        >
          Travel
        </button>
      </div>
      <div className="container ">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="form-control bg-dark text-secondary "
        ></input>
      </div>
    </>
  );
};

export default Navbar;
