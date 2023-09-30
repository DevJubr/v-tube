import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DotMenu from "../../UI/dotMenu";
import usePlayList from "../../../hooks/usePlayList";
import { Link } from "react-router-dom";

const CdA = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CadLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const Card = styled.div`
  width: 350px;
  height: 320px;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #4f076e;
  border-radius: 0.4rem;
`;

const CardImg = styled.div`
  width: 100%;
  height: auto;
  > img {
    border-radius: 0.4rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 0.8rem;
  > p {
    color: #afafaf;
  }
`;
const LinkX = styled(Link)`
  color: white;
  fill: white;
`;
const PlayListItem = ({
  channelId,
  channelTitle,
  contentDetails,
  items,
  playListDescription,
  playListId,
  playListTitle,
  publishedAt,
  thumbnails,
}) => {
  const { addToFev } = usePlayList();
  console.log(items);
  return (
    <Card>
      <CardImg>
        <img src={thumbnails.medium.url} alt={playListTitle} />
      </CardImg>

      <CardContent>
        <p>{playListTitle.slice(0, 30)}</p>
        <Typography variant="body2" color="text.secondary">
          {playListDescription == ""
            ? "this playlist hasn't any description"
            : playListDescription.slice(0, 40)}
        </Typography>
      </CardContent>
      <CdA>
        <CadLeft>
          <LinkX to={`/playlist/${playListId}`}>
            <PlayCircleIcon fill="#fff" />
          </LinkX>

          <div
            onClick={() => addToFev(playListId)}
            style={{ cursor: "pointer" }}
          >
            <FavoriteIcon />
          </div>
        </CadLeft>

        <DotMenu idpd={playListId} />
      </CdA>
    </Card>
  );
};
export default PlayListItem;
