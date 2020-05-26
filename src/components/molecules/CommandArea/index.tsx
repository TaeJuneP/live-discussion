import React from "react";
import styled from "styled-components";

import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";

type Props = {
  tendency: number;
  content: string;
  setContent: (content: string) => void;
  postCommand: () => void;
};

export default function CommandArea(props: Props) {
  return (
    <Contaienr>
      <TextAreaContainer>
        <TextArea
          content={props.content}
          setContent={props.setContent}
          placeHolder={"위치 확인 및 로그인을 하셔야 글을 작성 할 수 있습니다."}
        />
      </TextAreaContainer>
      <ButtonContainer>
        <Button text={"위치 확인"} color={"gray"} event={props.postCommand} />
      </ButtonContainer>
    </Contaienr>
  );
}

const Contaienr = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
`;

const TextAreaContainer = styled.div`
  width: 90%;
`;

const ButtonContainer = styled.div`
  width: 10%;
`;
