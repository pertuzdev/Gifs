import React from "react";
import { Route } from "wouter";

import "./App.css";

import GifsList from "./components/GifsList/GifsList";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={GifsList} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
