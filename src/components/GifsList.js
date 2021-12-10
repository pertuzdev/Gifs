import { useState, useEffect } from "react";

import Gif from "./Gif";

import getGifs from "../service/getGifs";

export default function GifsList({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);
  return gifs.map(({ id, title, url }) => (
    <Gif id={id} title={title} url={url} />
  ));
}
