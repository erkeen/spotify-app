import React from "react";
import styled from "styled-components";
import SideBarItem from "./SideBarItem/SideBarItem";
import {
  HomeOutlined,
  SearchOutlined,
  LibraryMusicOutlined,
} from "@material-ui/icons";
import { useContextValue } from "../../../context";

function SideBar() {
  const [{ playlists }, dispatch] = useContextValue();
  return (
    <CsWrap>
      <CsLogoImg
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarItem Icon={HomeOutlined} title="Home" />
      <SideBarItem Icon={SearchOutlined} title="Search" />
      <SideBarItem Icon={LibraryMusicOutlined} title="Your Library" />
      <CsStrongTitle>PLAYLISTS</CsStrongTitle>
      <CsHrLine />
      {playlists.slice(0, 8).map((playlist) => (
        <SideBarItem title={playlist.artist.name} />
      ))}
      {console.log(playlists)}
    </CsWrap>
  );
}

export default SideBar;

const CsWrap = styled.div`
  height: 100vh;
  flex: 0.2;
  background-color: #040404;
  min-width: 230px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
`;

const CsLogoImg = styled.img`
  object-fit: contain;
  height: 70px;
  padding: 10px;
  margin-right: auto;
`;

const CsStrongTitle = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 10px;
`;

const CsHrLine = styled.hr`
  border: 1px solid #282828;
  width: 90%;
  margin: 10px auto;
`;
