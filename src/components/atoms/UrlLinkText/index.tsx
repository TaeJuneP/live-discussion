import React from "react";
import styled from "styled-components";

type Props = {
  url: string;
};

export default function UrlLinkText(props: Props) {
  return (
    <Url as="a" href={props.url}>
      {props.url}
    </Url>
  );
}

const Url = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
