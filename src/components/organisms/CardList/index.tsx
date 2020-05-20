import React from "react";
import styled from "styled-components";

type Props = {
  cardList: [];
};

export default function CardList(props: Props) {
  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
`;
