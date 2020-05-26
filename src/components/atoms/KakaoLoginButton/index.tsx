import React from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

import { requestLogin } from "../../../modules/apis";

import Img from "../../../assets/imgs/kakao_login_btn_simple_small.png";

const API_KEY = process.env.REACT_APP_KAKAO_JS_KEY;

type Props = {
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

export default function KakaoLoginButton(props: Props) {
  const reponsekakao = async (res: any) => {
    console.log(res);
    // const data: any = await requestLogin(res);
    if (res !== undefined) {
      console.log(res);
      props.setUserInfo({
        user: {
          id: res.profile.id,
          name: res.profile.properties.nickname,
          imgUrl: res.profile.properties.thumbnail_image,
        },
        token: res.response.access_token,
        login: true,
      });
    }
  };
  const responseFail = () => {
    console.log("Error");
  };
  return (
    <Container>
      <LoginButton
        jsKey={String(API_KEY)}
        buttonText=""
        onSuccess={reponsekakao}
        onFailure={responseFail}
        getProfile={true}
      />
      <KakaoImg src={Img} />
    </Container>
  );
}

const Container = styled.div`
  width: 60px;
  height: 30px;
`;

const LoginButton = styled(KakaoLogin)`
  position: absolute;
  width: 60px;
  height: 30px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;

const KakaoImg = styled.img`
  width: 60px;
  height: 30px;
  position: absolute;
`;
