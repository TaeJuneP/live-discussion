import React from "react";
import styled from "styled-components";

import Title from "../../atoms/BaseText";
import TabButton from "../../atoms/TabButton";

type Props = {
  tendency: number;
  setTendency: (tendency: number) => void;
};

export default function CommandHeader(props: Props) {
  return (
    <Container>
      <Title text={"주장"} />
      <TabButtons>
        <TabButton
          text={"찬성"}
          color={props.tendency === 1 ? "#1870b9" : "#gray"}
          setTendency={props.setTendency}
          tendency={1}
        />
        <TabButton
          text={"반대"}
          color={props.tendency === 2 ? "#eb4374" : "#gray"}
          setTendency={props.setTendency}
          tendency={2}
        />
      </TabButtons>
    </Container>
  );
}

const Container = styled.div`
  width: 170px;
  justify-content: space-between;
  height: 50px;
  display: flex;
  align-items: center;
`;

const TabButtons = styled.div`
  display: flex;
`;
