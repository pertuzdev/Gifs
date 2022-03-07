import React from "react";

import Helmet from "react-helmet";

import "./styles.css";

const Spinner = () => (
  <>
    <Helmet>
      <title>Cargando... | Gifs</title>
    </Helmet>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Spinner;
