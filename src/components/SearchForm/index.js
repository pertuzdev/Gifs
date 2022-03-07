import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = () => {
    onSubmit({ searchWord });
  };

  const handleChange = (evt) => {
    setSearchWord(evt.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        value={searchWord}
        type="text"
      />
    </form>
  );
}

export default React.memo(SearchForm);
