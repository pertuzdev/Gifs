import React from "react";

import { useGifs } from "hooks/useGifs";

import Gif from "../Gif";
import Spinner from "../Spinner";

import "./styles.css";

export default function GifsList({ keyword = null } = { keyword: null }) {
  const { gifs, loading } = useGifs({ keyword });
  return (
    <div className="GifsList">
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
