import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../../api";

const playlistModel = persist({
  items: {},
  loading: false,
  error: "",
  addToPlaylist: action((state, payload) => {
    state.items[payload.playListId] = payload;
    return state;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setPlaylistData: thunk(
    async ({ setError, addToPlaylist, setLoading }, payload, { getState }) => {
      if (getState().items[payload]) return;

      setLoading(true);
      try {
        const data = await getPlaylist(payload);
        addToPlaylist(data);
      } catch (error) {
        setError("error hoice = ", error);
      } finally {
        setLoading(false);
      }
    }
  ),
  removePlaylist: action((state, payload) => {
    const newState = { ...state.items };
    delete newState[payload];
    state.items = newState;
  }),
});
export default playlistModel;
