import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
  text: string;
  event: () => void;
};

export default function Button(props: Props) {
  return (
    <Container color={props.color} onClick={props.event}>
      {props.text}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;
