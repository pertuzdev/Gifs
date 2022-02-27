import React from "react";
import Gif from "../../components/Gif";

import { useGlobalGifs } from "hooks/useGlobalGifs";

export default function Detail({ params }) {
  const { id } = params;
  const gifs = useGlobalGifs();

  const gif = gifs.find((gif) => gif.id === id);

  console.log(gif, "Grifindord");

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif} />;
    </>
  );
}
