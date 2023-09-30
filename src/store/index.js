import { createStore } from "easy-peasy";
import fevPlaylist from "./models/fev-playlist-model";
import playlistModel from "./models/playlist-model";
import RecentPlaylist from "./models/recen-playlist";
import videoIdTrackModel from "./models/track-videoId";

const store = createStore({
  playlist: playlistModel,
  fevPlaylist: fevPlaylist,
  recentPlaylist: RecentPlaylist,
  videoId: videoIdTrackModel,
});

export default store;
