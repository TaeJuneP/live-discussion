import React from "react";
import styled from "styled-components";

type Props = {
  logo: string;
};

export default function Logo(props: Props) {
  return <Container>{props.logo}</Container>;
}

const Container = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
