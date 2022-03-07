import React, { useCallback, useEffect, useRef } from "react";

import debounce from "just-debounce-it";

import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";

import GifsList from "../../components/GifsList";
import Spinner from "components/Spinner";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const viewFinderRef = useRef();

  const { gifs, loading, setPage } = useGifs({ keyword });
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && viewFinderRef,
    once: false,
  });

  //const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );
  useEffect(() => {
    if (isNearScreen) handleNextPage();
  }, [isNearScreen, handleNextPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <GifsList gifs={gifs} />
          <div id="observer" ref={viewFinderRef}></div>
        </>
      )}
      {/* <button onClick={handleNextPage}>Next Page</button> */}
    </>
  );
}
