import React from "react";

import Gif from "../Gif/Gif";

import { useGifs } from "../../hooks/useGifs";
import Spinner from "../Spinner/Spinner";

export default function GifsList({ keyword = null } = { keyword: null }) {
  const { gifs, loading } = useGifs({ keyword });
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))
      )}
    </div>
  );
}
