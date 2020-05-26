import React from "react";
import styled from "styled-components";
import Card from "../../molecules/Card";

type Props = {
  cardList: any;
};
export default function MobileCardList(props: Props) {
  console.log(props.cardList);
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
  width: 100%;
  padding: 0.5px;
  overflow-y: scroll;
`;
