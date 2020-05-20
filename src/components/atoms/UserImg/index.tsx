import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
};

export default function UserImg(props: Props) {
  return (
    <>
      <Img src={props.imgUrl} />
    </>
  );
}

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
