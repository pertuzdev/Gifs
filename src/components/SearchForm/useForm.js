import { useReducer } from "react";

const ACTIONS = {
  UPDATE_SEARCHWORD: "update_searchword",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.UPDATE_SEARCHWORD:
      return { ...state, searchWord: actions.payload, times: state.times + 1 };

    case ACTIONS.UPDATE_RATING:
      return { ...state, rating: actions.payload };

    default:
      return state;
  }
};

export default function useForm({
  initialWord = "",
  initialRating = "g",
} = {}) {
  const [state, dispatch] = useReducer(reducer, {
    searchWord: initialWord,
    rating: initialRating,
    times: 0,
  });

  const { searchWord, times, rating } = state;

  const updateSearchWord = (searchWord) =>
    dispatch({ type: ACTIONS.UPDATE_SEARCHWORD, payload: searchWord });

  const updateRating = (rating) =>
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating });

  return { searchWord, times, rating, updateSearchWord, updateRating };
}
