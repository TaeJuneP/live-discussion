import React from "react";
import styled from "styled-components";
import KakaoLogin from "../../atoms/KakaoLoginButton";
import Logo from "../../atoms/Logo";

export default function TopBar() {
  return (
    <Container>
      <Logo logo={"live토론"} />
      <KakaoLogin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
`;
