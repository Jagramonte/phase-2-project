import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import myLogo from "./Mylogo.png";
import "./Header.css";

export function Header({ setSearchTerm }) {
  return (
    // <header className="header">
    //   <Link to="/" className="logo">
    //     <img src={myLogo} alt="logo"/>
    //     <h1>J&J Travel Agency</h1>
    //   </Link>
    //   <SearchBar setSearchTerm={setSearchTerm} />
    // </header>

    <header className="app-header">
      <Link to="/" className="header__left">
        <img src={myLogo} alt="alt" className="logo" />
        <h1 className="logo-name">J&J Agency</h1>
      </Link>
      <SearchBar setSearchTerm={setSearchTerm} className="header__right" />
    </header>
  );
}
