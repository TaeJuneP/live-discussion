import React from "react";
import styled from "styled-components";

import Img from "../../atoms/UserImg";
import NickName from "../../atoms/BaseText";

type Props = {
  name: string;
  imgUrl: string;
  location: { address: any; check: boolean };
};

export default function UserInfo(props: Props) {
  console.log(props.location);
  return (
    <Container>
      <UserContainer>
        <Img imgUrl={props.imgUrl} />
        <NickName text={props.name} />
      </UserContainer>
      {props.location.check ? (
        <NickName text={props.location.address.latitude} />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: block;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
