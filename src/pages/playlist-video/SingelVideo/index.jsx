import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
const ConX = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const SingelVideo = ({ videoID }) => {
  const playerRef = useRef(null);
  const [playerHeight, setPlayerHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const playerWidth = playerRef.current.offsetWidth;
      const aspectRatio = 9 / 16; // assume 16:9 aspect ratio
      const newHeight = playerWidth * aspectRatio;
      setPlayerHeight(newHeight);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  const opts = {
    height: playerHeight,
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <>
      <ConX ref={playerRef}>
        <YouTube videoId={videoID} opts={opts} onReady={onReady} />
      </ConX>
    </>
  );
};

export default SingelVideo;
