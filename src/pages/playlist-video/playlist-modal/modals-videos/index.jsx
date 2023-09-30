import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
const ConX = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;
const ImgCon = styled.div`
  width: 40%;
  height: auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #25073a;
  border-radius: 0.4rem;
`;
const PlaylistModalVideo = ({ cnlname, thumbnails, title }) => {
  return (
    <Container maxWidth="sm">
      <ConX>
        <ImgCon>
          <Img src={thumbnails} alt={title} />
        </ImgCon>
        <div className="vidotitle">
          <p>{title}</p>
        </div>
      </ConX>
    </Container>
  );
};

export default PlaylistModalVideo;
