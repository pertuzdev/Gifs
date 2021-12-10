import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import getGifs from "./service/getGifs";

const GIFS = [
  "https://media0.giphy.com/media/13CoXDiaCcCoyk/200.webp?cid=ecf05e475cd60sxo7o678zsvjyqttv3ng3svl41b673x3bve&rid=200.webp&ct=g",
  "https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w.webp?cid=ecf05e475cd60sxo7o678zsvjyqttv3ng3svl41b673x3bve&rid=200w.webp&ct=g",
];

const GIFS_PANDA = [
  "https://media2.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e479ddczleot1qlwu5t4jqlsdxmpvuhm7qq51yclwov&rid=200w.webp&ct=g",
];

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "blackpink" }).then((gifs) => setGifs(gifs));
  }, []);
  return (
    <div className="App">
      <section className="App-section">
        {gifs.map(({ id, title, url }) => (
          <div>
            <h1>{title}</h1>
            <img key={id} src={url} alt={title} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
