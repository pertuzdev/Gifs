import React from "react";

import GifsList from "../../components/GifsList/GifsList";

export default function SearchResults({ params }) {
  const { keyword } = params;

  return <GifsList keyword={keyword} />;
}
