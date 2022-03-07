import React, { useState } from "react";

import "./styles.css";

function SearchForm({ onSubmit }) {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = () => {
    onSubmit({ searchWord });
  };

  const handleChange = (evt) => {
    setSearchWord(evt.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-search-btn">Buscar</button>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        value={searchWord}
        type="text"
        className="c-search-input"
      />
    </form>
  );
}

export default React.memo(SearchForm);
