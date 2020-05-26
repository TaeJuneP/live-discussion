import React from "react";
import styled from "styled-components";
import UrlHref from "../../atoms/UrlLinkText";

type Props = {
  ogData: any[];
  url: string;
  tendency: number;
};

export default function CardOpenGraph(props: Props) {
  return (
    <Container tendency={props.tendency}>
      <Img src={props.ogData[1]} />
      <Body>
        <Title>{props.ogData[0]}</Title>
        <UrlHref url={props.url} />
      </Body>
    </Container>
  );
}

const Container: React.ComponentType<any> = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  border-bottom: 1px solid
    ${(props: any) => (props.tendency === 2 ? "#eb4374" : "#1870b9")};
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  padding: 1px;
  border-radius: 10px;
`;

const Title = styled.div`
  height: 45px;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 22px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Body = styled.div`
  display: block;
  height: 100%;
  width: calc(100% - 80px);
  padding: 5px 0px 5px 5px;
`;
