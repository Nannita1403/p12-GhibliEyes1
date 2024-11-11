import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initiall state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  function addMovieToWatchlist(movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  function removeMovieFromWatchlist(id) {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  }

  function clearWatchlist() {
    dispatch({ type: "CLEAR_WATCHLIST" });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        clearWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}