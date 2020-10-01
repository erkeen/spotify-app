import React from "react";
import styled from "styled-components";

function SongList({ track }) {
  return (
    <CsSongListWrap>
      <img src={track.album.cover_small} alt="" />
      <CsSongInfo>
        <h1>{track.title}</h1>
        <p>
          {track.artist.name} - {track.album.title}
        </p>
      </CsSongInfo>
    </CsSongListWrap>
  );
}

export default SongList;

const CsSongListWrap = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }

  > img {
    height: 40px;
    width: 40px;
  }
`;

const CsSongInfo = styled.div`
  margin-left: 20px;

  > h1 {
    font-size: 16px;
  }

  > p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;
