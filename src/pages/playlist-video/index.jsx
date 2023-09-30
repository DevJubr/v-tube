import { Container } from "@mui/system";
import { useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/AppBar/index";
import usePlayList from "../../hooks/usePlayList";
import PlaylistModal from "./playlist-modal";
import SingelVideo from "./SingelVideo";
const ConX = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;
  flex-direction: column;
`;
let videoId;
const PlayListVideo = () => {
  const { videoId: videoIdFromState } = useStoreState((state) => state.videoId);
  const [MainVideoId, setMainVideoId] = useState(videoId);

  const { id } = useParams();
  const { getPlaylistContents } = usePlayList();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const item = getPlaylistContents(id);
  const [indexNo, setIndexNo] = useState(
    item.items.findIndex((video) => video.contentDetails.videoId === videoId)
  );
  console.log("videoIdFromState--------------", videoIdFromState);

  if (!videoIdFromState) {
    videoId = item.items[0].contentDetails.videoId;
  } else {
    videoId = videoIdFromState;
  }
  useEffect(() => {
    setMainVideoId(videoId);
    console.log("heree");
  }, [videoId]);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hendelNextVideo = () => {
    const newIndexNo = indexNo + 1; // increment the index by 1
    setIndexNo(newIndexNo); // update the index in state
    const nextVideo = item?.items[newIndexNo];
    const nextVideoId = nextVideo?.contentDetails?.videoId;
    setMainVideoId(nextVideoId);
  };
  const hendelPreVideo = () => {
    const newIndexNo = indexNo - 1; // increment the index by 1
    setIndexNo(newIndexNo); // update the index in state
    const nextVideo = item?.items[newIndexNo];
    const nextVideoId = nextVideo?.contentDetails?.videoId;
    setMainVideoId(nextVideoId);
  };
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <ConX>
          <SingelVideo videoID={MainVideoId} />
          <button onClick={handleClickOpen("paper")}>fgsda</button>
          {open && (
            <PlaylistModal
              videos={item.items}
              open={open}
              scroll={scroll}
              handleClose={handleClose}
              setOpen={setOpen}
            />
          )}
          <div className="sliderbtn">
            <button className="prevBtn" onClick={hendelPreVideo}>
              prev
            </button>
            <button className="nextBtn" onClick={hendelNextVideo}>
              next
            </button>
          </div>
        </ConX>
      </Container>
    </>
  );
};

export default PlayListVideo;
