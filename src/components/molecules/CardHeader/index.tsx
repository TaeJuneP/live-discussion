import React from "react";
import styled from "styled-components";

import Name from "../../atoms/BaseText";
import UserImg from "../../atoms/UserImg";

type Props = {
  user: {
    name: string;
    imgUrl: string;
  };
  tendency: number;
};

export default function CardHeader(props: Props) {
  return (
    <>
      {props.tendency === 1 ? (
        <Container tendency={props.tendency}>
          <UserImg imgUrl={props.user.imgUrl} />
          <Blank />
          <Name text={props.user.name} />
        </Container>
      ) : (
        <Container tendency={props.tendency}>
          <Name text={props.user.name} />
          <Blank />
          <UserImg imgUrl={props.user.imgUrl} />
        </Container>
      )}
    </>
  );
}

const Container: React.ComponentType<any> = styled.div`
  float: ${(props: any) => (props.tendency === 1 ? "left" : "right")};
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Blank = styled.div`
  height: 100%;
  width: 10px;
`;
