import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../molecules/CommandHeader";
import Body from "../../molecules/CommandArea";

import { getPosition } from "../../../modules/function/Navigator";
import { ClassifyCommand } from "../../../modules/function/ClassifyCommand";
import { postCommand } from "../../../modules/apis";

type Props = {
  userInfo: {
    user: {
      id: string;
      name: string;
      imgUrl: string;
    };
    token: string;
    login: boolean;
  };
  location: { address: any; check: boolean };
  setLocation: (location: { address: any; check: boolean }) => void;
};

export default function Command(props: Props) {
  const [tendency, setTendency] = useState(0);
  const [content, setContent] = useState("");

  const clickEvent = async () => {
    const position: any = await getPosition();
    if (position !== 0) {
      props.setLocation({ address: position, check: true });
    } else {
      props.setLocation({ address: position, check: false });
    }
    const url: string[] = ClassifyCommand(content);
    postCommand(content, url, "  ", tendency);
  };

  return (
    <Container>
      <Header tendency={tendency} setTendency={setTendency} />
      <Body
        tendency={tendency}
        content={content}
        setContent={setContent}
        postCommand={clickEvent}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 15px;
  margin: auto;
  height: 150px;
  display: block;
`;
