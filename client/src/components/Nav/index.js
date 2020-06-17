import React from "react";
import "./style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {

  return (
    <header>
      <h1>Google Books</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
  
  
}

export default Nav;