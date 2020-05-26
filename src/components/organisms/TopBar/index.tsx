import React from "react";
import styled from "styled-components";

import UserInfo from "../../molecules/UserInfo";
import KakaoLogin from "../../atoms/KakaoLoginButton";
import Logo from "../../atoms/Logo";

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
  setUserInfo: (userInfo: {
    user: {
      id: string;
      name: string;
      imgUrl: string;
    };
    token: string;
    login: boolean;
  }) => void;
};

export default function TopBar(props: Props) {
  return (
    <Container>
      <Logo logo={"live토론"} />
      {!props.userInfo.login ? (
        <KakaoLogin setUserInfo={props.setUserInfo} />
      ) : (
        <UserInfo
          name={props.userInfo.user.name}
          imgUrl={props.userInfo.user.imgUrl}
          location={props.location}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
`;
