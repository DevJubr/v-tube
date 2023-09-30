import axios from "axios";

// const API_KEY = import.meta.env.VITE_API_KEY;
// const ITEMS_API = import.meta.env.VITE_ITEMS_API_URL;
// const PLAYLIST_API = import.meta.env.VITE_PLAYLIST_API_URL;

const fetchPlaylistItems = async (playlistId, result = [], pageToken = "") => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDkxIEXdiWdovoHdPMNac5oE-hxyZLYlsU&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`
  );
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    console.log("ts, tes, yes");
    result = await fetchPlaylistItems(playlistId, result, data.nextPageToken);
  }
  return result;
};

const getPlaylist = async (playlistId) => {
  const PlayListItems = await fetchPlaylistItems(playlistId);

  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDkxIEXdiWdovoHdPMNac5oE-hxyZLYlsU&part=id,contentDetails,status,snippet&maxResults=50&id=${playlistId}`
  );
  const {
    publishedAt,
    channelId,
    title: playListTitle,
    description: playListDescription,
    thumbnails,
    channelTitle,
  } = data.items[0].snippet;
  const { id: playListId, contentDetails } = data.items[0];

  return {
    items: PlayListItems,
    publishedAt,
    channelId,
    playListTitle,
    playListDescription,
    thumbnails,
    channelTitle,
    playListId,
    contentDetails,
  };
};

export default getPlaylist;
// ("https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDkxIEXdiWdovoHdPMNac5oE-hxyZLYlsU&part=id,contentDetails,status,snippet&maxResults=50&playlistId=PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
