import React from "react";
import Gif from "../../components/Gif";

import { useSingleGif } from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";

export default function Detail({ params }) {
  const { id } = params;
  const { gif, isLoading, error } = useSingleGif({ id });

  if (isLoading) return <Spinner />;

  if (error) return <Redirect to="/404" />;

  if (!gif) return null;

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif} />;
    </>
  );
}
