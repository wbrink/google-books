import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Saved from './components/Saved';
import Nav from "./components/Nav"
import API from './utils/API';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const BookContext = React.createContext([]);

function App() {

  const [saved, setSaved] = useState([]);
  



  useEffect(() => {
    API.getSavedBooks()
      .then(res => res.json())
      .then(data => {
        if (data == false) {
          setSaved(false);
        } else {
          setSaved(data);
        }
        
      })
  }, [])

  return (
    <Router>
      <BookContext.Provider value={{saved, setSaved}}>
        <div> 
          <Nav />

          <Route exact path="/">
            <Search />
          </Route>

          <Route exact path="/saved">
            <Saved />
          </Route>

        </div>
      </BookContext.Provider>
    </Router>
  );
}

export default App;
