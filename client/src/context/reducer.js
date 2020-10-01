export const initialState = {
  playlists: [],
  discoverSongs: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_SONGS":
      return {
        ...state,
        discoverSongs: action.discoverSongs,
      };
    default:
      return state;
  }
};
