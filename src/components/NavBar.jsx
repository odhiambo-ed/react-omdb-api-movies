import React from "react";
import { Link } from "react-router-dom";
import { imdbLogo } from "../utils";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 logo">
        <img src={imdbLogo} alt="IMDB Logo" className="navbar-brand" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex flex-row justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Favourites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">
                Watchlist
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex flex-row gap-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;