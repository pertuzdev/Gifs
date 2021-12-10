import React from "react";

import "./App.css";

import GifsList from "./components/GifsList";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <GifsList keyword="mamamoo" />
      </section>
    </div>
  );
}

export default App;
