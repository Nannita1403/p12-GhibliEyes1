const reducer = (state, action) => {
    switch (action.type) {
      // add new movie to the watch list:
      case "ADD_MOVIE_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload]
        };
  
      // remove a movie from the watch list:
      case "REMOVE_MOVIE_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload
          )
        };
  
      // clear all watch list
      case "CLEAR_WATCHLIST":
        return {
          ...state,
          watchlist: []
        };
  
      default:
        return state;
    }
  };
  export default reducer;