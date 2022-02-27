import { useState, useEffect, useContext } from "react";

import getGifs from "../services/getGifs";

import GifsContext from "../context/GifsContext";

export function useGifs({ keyword }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const localWord =
      localStorage.getItem("lastSearch") === "null"
        ? null
        : localStorage.getItem("lastSearch");

    const keywordToUse = keyword || localWord || "random";

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastSearch", keyword);
    });
  }, [keyword, setGifs]);

  return { gifs, loading };
}
