import React, { useEffect } from "react";
import MainContent from "./MainContent/MainContent";
import SideBar from "./SideBar/SideBar";
import styled from "styled-components";
import PlayBar from "./PlayBar/PlayBar";
import { useContextValue } from "../../context";
import axios from "../../axios";

function Home() {
  const [{ playlists }, dispatch] = useContextValue();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const { data } = await axios.get("/songs/playlist");
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: data,
        });
        console.log(playlists);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaylist();
  }, []);

  useEffect(() => {
    const fetchDiscoverSongs = async () => {
      try {
        const { data } = await axios.get("/songs/young%20thug");
        dispatch({
          type: "SET_DISCOVER_SONGS",
          discoverSongs: data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchDiscoverSongs();
  }, []);

  return (
    <CsWrap>
      {console.log(playlists)}
      <SideBar />
      <MainContent />
      <PlayBar />
    </CsWrap>
  );
}

export default Home;

const CsWrap = styled.div`
  display: flex;
`;
