import Helmet from "react-helmet";

import { useGifs } from "hooks/useGifs";

import TrendingSearches from "components/TrendingSearches";
import GifsList from "components/GifsList";
import SearchForm from "components/SearchForm";

export default function Home() {
  const { gifs, loading } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Gifs</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
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
