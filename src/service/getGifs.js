const API_KEY = "Wu26STI3iwaCZ5RQ17jk2yec1GVmlYzT";

const getGifs = ({ keyword = "twice" } = {}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(API_URL)
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
