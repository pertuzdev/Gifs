import { API_KEY, API_URL } from "./settings";

const getTrendingSearches = () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((resJSON) => {
      const { data } = resJSON;
      return data;
    });
};

export default getTrendingSearches;
