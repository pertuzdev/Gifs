import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import { useGlobalGifs } from "./useGlobalGifs";

export function useSingleGif({ id }) {
  const gifs = useGlobalGifs();
  const singleGif = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(singleGif);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e);
          setIsLoading(false);
        });
    }
  }, [id, gif]);

  return { gif, isLoading, error };
}
