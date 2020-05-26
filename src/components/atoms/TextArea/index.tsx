import React from "react";
import styled from "styled-components";

type Props = {
  placeHolder: string;
  content: string;
  setContent: (content: string) => void;
};

export default function TextArea(props: Props) {
  const valueOnChange = (e: any) => {
    props.setContent(e.target.value);
  };

  return (
    <TextBox
      placeholder={props.placeHolder}
      value={props.content}
      onChange={valueOnChange}
    />
  );
}

const TextBox = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;
  font-size: 16px;
`;
