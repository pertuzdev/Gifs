import React from "react";
import { useLocation } from "wouter";

import "./styles.css";

import useForm from "./useForm";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialWord, initialRating }) {
  const { searchWord, times, rating, updateSearchWord, updateRating } = useForm(
    { initialWord, initialRating }
  );

  const [, setLocation] = useLocation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLocation(`/search/${searchWord}/${rating}`);
  };

  const handleChange = (evt) => {
    updateSearchWord(evt.target.value);
  };

  const handleOnChangeRating = (evt) => {
    updateRating(evt.target.value);
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
      <select value={rating} onChange={handleOnChangeRating}>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <span>{times}</span>
    </form>
  );
}

export default React.memo(SearchForm);
