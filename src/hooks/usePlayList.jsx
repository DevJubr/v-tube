import { useStoreActions, useStoreState } from "easy-peasy";

const usePlayList = () => {
  const { playlist, fevPlaylist } = useStoreActions((actions) => actions);
  const { playlist: gpc } = useStoreState((state) => state);

  const getPlaylistById = (playlistId) => {
    try {
      playlist.setPlaylistData(playlistId);
    } catch (error) {
      playlist.setError(error);
    }
  };

  const addToFev = (id) => {
    fevPlaylist.addToFev(id);
  };
  const removeFromPlaylist = (id) => {
    playlist.removePlaylist(id);
  };

  const getPlaylistContents = (id) => {
    const Item = gpc.items[id];
    return Item;
  };

  return { getPlaylistById, addToFev, removeFromPlaylist, getPlaylistContents };
};

export default usePlayList;
