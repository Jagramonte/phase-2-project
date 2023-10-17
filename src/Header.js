import React from "react";
import { Link } from "react-router-dom";
export function Header(){
    return(
        <header>
            <Link to="/" className="logo">
                <h1>J&J Travel Agency</h1>
            </Link>
        </header>
    )
}
