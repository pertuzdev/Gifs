import React, { useContext } from "react";

import GifsContext from "context/GifsContext";

export function useGlobalGifs() {
  return useContext(GifsContext).gifs;
}
