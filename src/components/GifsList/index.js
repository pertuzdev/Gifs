import React from "react";

import { useGifs } from "hooks/useGifs";

import Gif from "../Gif";
import Spinner from "../Spinner";

import "./styles.css";

export default function GifsList({ gifs }) {
  return (
    <div className="GifsList">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
