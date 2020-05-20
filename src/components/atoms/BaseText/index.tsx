import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

export default function BaseText(props: Props) {
  return <Container>{props.text}</Container>;
}

const Container = styled.div`
  font-size: 16px;
  font-weight: normal;
`;
