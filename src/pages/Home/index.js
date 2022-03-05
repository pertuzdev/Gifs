import { useState } from "react";

import { Link, useLocation } from "wouter";

import TrendingSearches from "components/TrendingSearches";
import GifsList from "components/GifsList";
import { useGifs } from "hooks/useGifs";

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [location, setLocation] = useLocation();

  const { gifs, loading } = useGifs();

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
        <button>Buscar</button>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          value={searchWord}
          type="text"
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <GifsList gifs={gifs} />
        </div>
        <div className="App-trending">
          <TrendingSearches name="Trending" />
        </div>
      </div>
    </>
  );
}
