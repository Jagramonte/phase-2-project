import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import myLogo from "./Mylogo.png";
import "./Header.css";

export function Header({ setSearchTerm }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={myLogo} alt="logo"/>
        <h1>J&J Travel Agency</h1>
      </Link>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>
  );
}
