import { useLocation } from "wouter";

import { useGifs } from "hooks/useGifs";

import TrendingSearches from "components/TrendingSearches";
import GifsList from "components/GifsList";
import SearchForm from "components/SearchForm";
import { useCallback } from "react";

export default function Home() {
  const [location, setLocation] = useLocation();

  const { gifs, loading } = useGifs();

  const onSubmit = useCallback(
    ({ searchWord }) => {
      setLocation(`/search/${searchWord}`);
    },
    [setLocation]
  );

  return (
    <>
      <header className="o-header">
        <SearchForm onSubmit={onSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <GifsList gifs={gifs} />
          </div>
          <div className="App-trending">
            <TrendingSearches name="Trending" />
          </div>
        </div>
      </div>
    </>
  );
}
