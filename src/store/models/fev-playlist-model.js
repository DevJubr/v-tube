import { action, persist } from "easy-peasy";

const fevPlaylist = persist({
  fevPlayList: [],
  // error: "",
  // setError: action((state, payload) => {
  //   state.error = payload;
  // }),
  addToFev: action((state, payload) => {
    if (!state.fevPlayList.includes(payload)) {
      state.fevPlayList.push(payload);
    } else {
      // state.setError("playlist alredy in fevlist");
      return;
    }
  }),
  removeFromFev: action((state, palylistId) => {
    state.fevPlayList = state.fevPlayList.filter(
      (item) => item.playListId !== palylistId
    );
  }),
});

export default fevPlaylist;
