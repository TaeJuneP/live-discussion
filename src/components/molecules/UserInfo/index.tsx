import React from "react";
import styled from "styled-components";

import Img from "../../atoms/UserImg";
import NickName from "../../atoms/BaseText";

type Props = {
  imgUrl: string;
  nickName: string;
};

export default function UserInfo(props: Props) {
  return (
    <Container>
      <Img imgUrl={props.imgUrl} />
      <NickName text={props.nickName} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
