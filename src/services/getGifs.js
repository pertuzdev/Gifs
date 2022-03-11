import { API_KEY, API_URL } from "./settings";

const getGifs = ({ keyword, limit = 15, page = 0, rating = "g" }) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((resJSON) => {
      const { data } = resJSON;
      const gifs = data.map((item) => {
        const { title, id, images } = item;
        const { url } = images.downsized_medium;
        return { id, title, url };
      });
      return gifs;
    });
};

export default getGifs;
