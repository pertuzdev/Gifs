import React, { useCallback, useEffect, useRef } from "react";

import { Helmet } from "react-helmet";

import debounce from "just-debounce-it";

import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";

import GifsList from "components/GifsList";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating } = params;

  const viewFinderRef = useRef();

  const { gifs, loading, setPage } = useGifs({ keyword, rating });
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && viewFinderRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} results for ${keyword}` : "";

  //console.log(gifs[0], "gif");

  const handleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    [setPage]
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
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
            <meta name="rating" content="General" />
          </Helmet>
          <header className="o-header">
            <SearchForm
              initialWord={decodeURI(keyword)}
              initialRating={decodeURI(rating)}
            />
          </header>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <GifsList gifs={gifs} />
            <div id="observer" ref={viewFinderRef}></div>
          </div>
        </>
      )}
      {/* <button onClick={handleNextPage}>Next Page</button> */}
    </>
  );
}
