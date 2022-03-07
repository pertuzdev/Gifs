import React from "react";

import { Redirect } from "wouter";

import { useSingleGif } from "hooks/useSingleGif";
import { useSEO } from "hooks/useSEO";

import Spinner from "components/Spinner";
import Gif from "../../components/Gif";

export default function Detail({ params }) {
  const { id } = params;
  const { gif, isLoading, error } = useSingleGif({ id });

  const title = gif ? gif.title : "";

  const description = `Description of  ${title}`;

  useSEO({ title, description });

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
