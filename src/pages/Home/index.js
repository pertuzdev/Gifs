import Category from "components/Category";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import GifsList from "../../components/GifsList";

const POPULAR_GIFS = ["Twice", "Blackpink", "Itzy", "Mamamoo", "Aespa"];

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [location, setLocation] = useLocation();

  console.log(location, "location");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLocation(`/search/${searchWord}`);
  };

  const handleChange = (evt) => {
    setSearchWord(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          value={searchWord}
          type="text"
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <GifsList />
        </div>
        <div className="App-category">
          <Category name="Categorias populares" options={POPULAR_GIFS} />
          <Category name="Mascotas" options={["Perros", "Gatos", "Hamster"]} />
        </div>
      </div>
    </>
  );
}
