import React from "react";
import SearchBox from "./SearchBox";
import logo from "../assets/movie-db-api.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <div className="App-header-container">
        <Link to="/">
          <img src={logo} className="App-logo" alt="The movie DB" />
        </Link>
        <SearchBox placeholder="Search for movies or tv shows" />
      </div>
    </header>
  );
};

export default Header;
