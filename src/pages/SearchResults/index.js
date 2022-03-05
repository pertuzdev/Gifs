import React from "react";

import { useGifs } from "hooks/useGifs";

import GifsList from "../../components/GifsList";
import Spinner from "components/Spinner";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { gifs, loading, setPage } = useGifs({ keyword });

  console.log(gifs, "gifs");

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <GifsList gifs={gifs} />
        </>
      )}
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
