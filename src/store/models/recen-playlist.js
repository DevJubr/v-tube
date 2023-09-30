import { action, persist } from "easy-peasy";

const RecentPlaylist = persist({
  recentPlayList: [],
  addTorecent: action((state, payload) => {
    if (!state.recentPlayList.includes(payload)) {
      state.recentPlayList.push(payload);
    } else {
      return;
    }
  }),
  removeFromrecent: action((state, palylistId) => {
    state.recentPlayList = state.recentPlayList.filter(
      (item) => item.playListId !== palylistId
    );
  }),
});

export default RecentPlaylist;
