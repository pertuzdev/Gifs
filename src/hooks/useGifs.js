import { useState, useEffect, useContext } from "react";

import getGifs from "../services/getGifs";

import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
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

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastSearch", keywordToUse);
    });
  }, [keyword, setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { gifs, setPage, loading, loadingNextPage };
}
