import { useState, useEffect } from "react";

import getGifs from "../service/getGifs";

export function useGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
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
  }, [keyword]);

  return { gifs, loading };
}
