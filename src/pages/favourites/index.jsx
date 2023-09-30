import { Container } from "@mui/system";
import { useStoreState } from "easy-peasy";
import React from "react";
import styled from "styled-components";
import NavBar from "../../components/AppBar";
import PlayListItem from "../../components/playlists/item";
const ConX = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Paipo1 = styled.p`
  text-transform: capitalize;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 1.4rem 0;
`;

const Favourites = () => {
  const { fevPlaylist, playlist } = useStoreState((state) => state);
  let fev = [];
  fevPlaylist.fevPlayList.forEach((item) => {
    if (playlist.items[item]) {
      fev.push(playlist.items[item]);
    } else {
      return;
    }
  });
  console.log(fev);
  return (
    <>
      <NavBar />
      <Container maxWidth={"lg"}>
        <Paipo1>your Favourites</Paipo1>
        <ConX>
          {fev?.map((item) => {
            console.log(item);
            return <PlayListItem {...item} />;
          })}
        </ConX>
      </Container>
    </>
  );
};

export default Favourites;
