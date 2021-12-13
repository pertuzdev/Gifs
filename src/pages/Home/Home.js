import { useState } from "react";
import { Link, useLocation } from "wouter";
import GifsList from "../../components/GifsList/GifsList";

const POPULAR_GIFS = ["Twice", "Blackpink", "Itzy", "Mamamoo", "Aespa"];

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [location, setLocation] = useLocation();

  console.log(location, "location");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLocation(`/search/${searchWord}`);
  };

  const handleChange = (evt) => {
    setSearchWord(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={searchWord} />
      </form>
      <h3>Los Gifs más populares</h3>
      {POPULAR_GIFS.map((popularGif) => (
        <Link key={popularGif} to={`/search/${popularGif}`}>
          Gifs de {popularGif}
        </Link>
      ))}
      <GifsList />
    </>
  );
}
