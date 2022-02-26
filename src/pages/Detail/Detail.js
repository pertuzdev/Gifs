import { useState, useContext } from "react";
import Gif from "../../components/Gif/Gif";

import GifsContext from "../../context/GifsContext";

export default function Detail({ params }) {
  const { id } = params;
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((gif) => gif.id === id);

  console.log(gif, "Grifindord");

  return <Gif {...gif} />;
}
