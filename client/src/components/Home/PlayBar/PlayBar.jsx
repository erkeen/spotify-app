import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import styled from "styled-components";
import { Grid, Slider } from "@material-ui/core";

function PlayBar() {
  return (
    <CsWrap>
      <CsLeft>
        <p>Left</p>
      </CsLeft>
      <CsCenter>
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </CsCenter>
      <CsRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </CsRight>
    </CsWrap>
  );
}

export default PlayBar;

const CsWrap = styled.div`
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const CsLeft = styled.div`
  flex: 0.3;
  color: white;
  display: flex;
  align-items: center;
`;

const CsAlbumImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const CsCenter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;

  >svg: nth-child(4n+1) {
    color: green;
  }

  >svg: nth-child(3) {
    font-size: 2.5em;
  }

  > svg {
    &:hover {
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      transform: scale(1.2);
    }
  }
`;
const CsRight = styled.div`
  flex: 0.4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * .MuiSlider-root {
    color: green;
  }
`;
