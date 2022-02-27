import React from "react";

import GifsList from "../../components/GifsList";

export default function SearchResults({ params }) {
  const { keyword } = params;

  return (
    <>
      <h3 className="App-title">{keyword}</h3>
      <GifsList keyword={keyword} />
    </>
  );
}
