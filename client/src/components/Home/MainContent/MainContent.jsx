import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongList from "./SongList/SongList";
import { useContextValue } from "../../../context";
import axios from "../../../axios";

function MainContent() {
  const [{ discoverSongs }, dispatch] = useContextValue();

  return (
    <CsWrap>
      <Header />
      {console.log(discoverSongs)}
      <Banner track={discoverSongs} />
      <CsSongWrap>
        <CsIconWrap>
          <PlayCircleFilledIcon />
          <FavoriteIcon />
          <MoreHorizIcon />
        </CsIconWrap>
        {discoverSongs?.map((track) => (
          <SongList track={track} />
        ))}
      </CsSongWrap>
    </CsWrap>
  );
}

export default MainContent;

const CsWrap = styled.div`
  height: 100vh;
  flex: 0.8;
  background: linear-gradient(rgba(91, 87, 115), rgba(0, 0, 0, 1));
  padding: 30px;
  overflow-y: overlay;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CsSongWrap = styled.div`
  z-index: 1;
  margin: 20px -30px;
`;
const CsIconWrap = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }

  > svg:nth-child(1) {
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
      transition: 100ms transform ease-in;
      transform: scale(1.08);
    }
  }

  > svg:nth-child(2) {
    font-size: 3em;
  }
`;
