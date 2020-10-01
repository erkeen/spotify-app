import React from "react";
import styled from "styled-components";

function SideBarItem({ title, Icon }) {
  return (
    <CsNavItem>
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <CsSimpleTitle>{title}</CsSimpleTitle>}
    </CsNavItem>
  );
}

export default SideBarItem;

const CsNavItem = styled.div`
  display: flex;
  align-items: center;

  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  &:hover {
    color: white;
  }

  > svg {
    margin: 0 10px;
  }
`;

const CsSimpleTitle = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  fon-size: 14px;
`;
