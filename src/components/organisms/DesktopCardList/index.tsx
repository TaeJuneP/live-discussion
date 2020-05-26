import React from "react";
import styled from "styled-components";
import Card from "../../molecules/Card";

type Props = {
  cardList: any;
};
export default function DesktopCardList(props: Props) {
  return (
    <Container>
      {Object.keys(props.cardList).map((num) => (
        <Card card={props.cardList[num]} key={num} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 50%;
  padding: 0.5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px gray;
  }
`;
