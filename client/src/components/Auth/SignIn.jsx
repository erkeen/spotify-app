import React from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <CsWrap>
      <CsImg
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <CsBtn>LOGIN TO SPOTIFY</CsBtn>
    </CsWrap>
  );
}

export default SignIn;

const CsWrap = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const CsImg = styled.img`
  width: 100%;
  object-fit: contain;
  height: 50vh;
`;

const CsBtn = styled.button`
  padding: 20px;
  border-radius: 99px;
  background-color: #1db954;
  font-weight: 800;
  border: none;
`;
