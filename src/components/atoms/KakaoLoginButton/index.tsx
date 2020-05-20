import React from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import Img from "../../../assets/imgs/kakao_login_btn_simple_small.png";
import { requestLogin } from "../../../modules/apis";

const API_KEY = process.env.REACT_APP_KAKAO_JS_KEY;

export const reponsekakao = (res: any) => {
  requestLogin(res);
};
const responseFail = () => {
  console.log("Error");
};
export default function KakaoLoginButton() {
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
`;

const KakaoImg = styled.img`
  width: 60px;
  height: 30px;
  position: absolute;
`;
