import React from "react";
import { Route } from "wouter";

import "./App.css";

import GifsList from "./components/GifsList";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <Route path="/gifs/:keyword" component={GifsList} />
      </section>
    </div>
  );
}

export default App;
