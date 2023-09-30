import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favourites from "../pages/favourites/index";
import Recents from "../pages/recents/index";
import PlayListVideo from "../pages/playlist-video/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favourite",
    element: <Favourites />,
  },
  {
    path: "/recent",
    element: <Recents />,
  },
  {
    path: "/playlist",
    children: [
      {
        path: ":id",
        element: <PlayListVideo />,
      },
    ],
  },
]);
export default router;
