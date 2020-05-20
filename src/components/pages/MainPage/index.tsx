import React from "react";
import styled from "styled-components";
import TopBar from "../../organisms/TopBar";
export default function MainPage() {
  return (
    <Container>
      <TopBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
