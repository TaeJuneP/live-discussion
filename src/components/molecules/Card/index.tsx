import React, { useEffect, useState } from "react";
import styled from "styled-components";

import User from "../CardHeader";
import OpenGraph from "../CardOpenGraph";
import Text from "../../atoms/BaseText";

import { getScript } from "../../../modules/function/OpenGraph";

type Props = {
  card: any;
};

export default function Card(props: Props) {
  const [ogData, setOgData] = useState([]);

  useEffect(() => {
    getScript(props.card.url).then((res: any) => {
      setOgData(res);
    });
  }, []);
  console.log(props.card);

  return (
    <Container tendency={props.card.tendency}>
      <Header tendency={props.card.tendency}>
        <User user={props.card.user} tendency={props.card.tendency} />
      </Header>
      <Message tendency={props.card.tendency}>
        <OpenGraph
          ogData={ogData}
          url={props.card.url}
          tendency={props.card.tendency}
        />
        <Descriptioin>
          <Text text={props.card.article} />
        </Descriptioin>
      </Message>
    </Container>
  );
}

const Container: React.ComponentType<any> = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 15px;
  @media only screen and (max-width: 767px) {
    padding: ${(props: any) =>
      props.tendency === 1 ? "0 15px 0 1px" : "0 1px 0 15px"};
  }
`;

const Message: React.ComponentType<any> = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid
    ${(props: any) => (props.tendency === 2 ? "#eb4374" : "#1870b9")};
`;

const Header: React.ComponentType<any> = styled.div`
  width: 100%;
  height: 50px;
`;
const Descriptioin = styled.div`
  padding: 10px;
`;
