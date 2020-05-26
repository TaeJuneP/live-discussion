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
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
