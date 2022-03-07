import React from "react";

import { Redirect } from "wouter";

import { Helmet } from "react-helmet";

import { useSingleGif } from "hooks/useSingleGif";

import Spinner from "components/Spinner";
import Gif from "../../components/Gif";

export default function Detail({ params }) {
  const { id } = params;
  const { gif, isLoading, error } = useSingleGif({ id });

  const description = `Description of  ${gif?.title}`;

  if (isLoading) return <Spinner />;

  if (error) return <Redirect to="/404" />;

  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{`${gif?.title} | Gifs`}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif {...gif} />;
    </>
  );
}
