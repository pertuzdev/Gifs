import React from "react";
import { Link, Route } from "wouter";

import "./App.css";
import { GifsContextProvider } from "./context/GifsContext";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

import logo from "assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Gifs Logo" src={logo} />
          </figure>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          <Route
            path="/404"
            component={() => <h1>404 ERROR: Not Found :(</h1>}
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
