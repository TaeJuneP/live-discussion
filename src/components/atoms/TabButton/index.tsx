import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
  text: string;
  tendency: number;
  setTendency: (tendency: number) => void;
};

export default function TabButton(props: Props) {
  return (
    <Button
      color={props.color}
      onClick={() => props.setTendency(props.tendency)}
    >
      {props.text}
    </Button>
  );
}

const Button = styled.button`
  width: 60px;
  height: 24px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;
