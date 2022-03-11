import { useState, useEffect, useContext } from "react";

import getGifs from "../services/getGifs";

import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const localWord =
    localStorage.getItem("lastSearch") === "null"
      ? null
      : localStorage.getItem("lastSearch");

  const keywordToUse = keyword || localWord || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastSearch", keywordToUse);
    });
  }, [keyword, setGifs, keywordToUse, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs, rating]);

  return { gifs, setPage, loading, loadingNextPage };
}
