import React from "react";
import styled from "styled-components";

function Banner({ track }) {
  return (
    <CsBanner>
      {track && <img src={track[0]?.album.cover_medium} alt="" />}

      <div>
        <strong>PLAYLIST</strong>
        <h2>{track[0]?.album.title}</h2>
        <p>Description</p>
      </div>
    </CsBanner>
  );
}

export default Banner;

const CsBanner = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  > img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }

  > div {
    flex: 1;

    > h2 {
      font-size: 48px;
      margin-bottom: 10px;
    }

    > p {
      font-size: 14px;
    }
  }
`;
