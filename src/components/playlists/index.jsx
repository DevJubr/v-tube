import { Container } from "@mui/system";
import { useStore, useStoreState } from "easy-peasy";
import React from "react";
import styled from "styled-components";
import PlayListItem from "./item";

const ConX = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Playlists = () => {
  const data = useStoreState((state) => state.playlist);
  if (data.loading) return <div>Loading</div>;
  return (
    <>
      <Container maxWidth={"lg"}>
        <ConX>
          {Object.keys(data.items).length !== 0 &&
            Object.values(data.items)?.map((item) => (
              <PlayListItem key={item.playListId} {...item} />
            ))}
        </ConX>
      </Container>
    </>
  );
};

export default Playlists;
