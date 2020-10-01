import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Header() {
  return (
    <CsHeader>
      <CsLeft>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts "
        />
      </CsLeft>
      <CsRight>
        <Avatar alt="Erkeen" src="" />
        {/* <Avatar alt={user?.display_name} src={user?.images[0].url} /> */}
        {/* <h4>{user?.display_name}</h4> */}
        <h4>3rkeen</h4>
      </CsRight>
    </CsHeader>
  );
}

export default Header;

const CsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const CsLeft = styled.div`
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;

  > input {
    border: none;
    width: 100%;
    outline: none;
    padding-left: 5px;
  }
`;
const CsRight = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin-left: 10px;
  }
`;
