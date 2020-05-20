import React from "react";
import styled from "styled-components";

import User from "../UserInfo";
import Location from "../../atoms/BaseText";

type Props = {
  card: {
    imgUrl: string;
    nickName: string;
  };
  location: string;
};

export default function Card(props: Props) {
  return (
    <Container>
      <Header>
        <User imgUrl={props.card.imgUrl} nickName={props.card.nickName} />
        <Location text={props.location} />
      </Header>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: block;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
`;
