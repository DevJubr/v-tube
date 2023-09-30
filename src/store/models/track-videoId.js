import { action } from "easy-peasy";

const videoIdTrackModel = {
  videoId: "",
  addVideId: action((state, payload) => {
    state.videoId = payload;
  }),
};

export default videoIdTrackModel;
