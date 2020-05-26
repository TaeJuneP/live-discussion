import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TopBar from "../../organisms/TopBar";
import Command from "../../organisms/Command";
import DesktopCardList from "../../organisms/DesktopCardList";
import MobileCardList from "../../organisms/MobileCardList";

import { getScript } from "../../../modules/function/OpenGraph";
import { ClassifyCard } from "../../../modules/function/ClassifyCard";

export default function MainPage() {
  const [userInfo, setUserInfo] = useState({
    user: { id: "", name: "", imgUrl: "" },
    token: "",
    login: false,
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [location, setLocation] = useState({ address: {}, check: false });
  const [cardList, setCardList] = useState([]);
  const cards: any = [
    {
      id: 0,
      user: {
        name: "박태준",
        imgUrl:
          "http://k.kakaocdn.net/dn/jAifn/btqBpY1gzJl/XpCUZvd9kV19OCq9AsZ5J0/img_110x110.jpg",
      },
      url:
        "https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=100&oid=025&aid=0003003097",
      article:
        "중국 정부가 올해 국방예산을 전년 대비 6.6% 증액했다. 수치상으로는 20년 만에 가장 낮은 증가폭이지만 올해 중국 경제가 코로나19 쇼크로 경제성장률이 침체될 가능성을 고려할 때 오히려 상당한 증액에 해당한다는 관측이다. 22일 신화통신 등 중국매체 보도를 종합하면 리커창 총리는 이날 베이징 인민대회당에서 개막한 13기 전인대 3차 연례회의 정부공작(업무)보고에서 올해 국방예산으로 1조2700억 위안(약220조원)을 보고했다. ",
      tendency: 1,
    },
    {
      id: 0,
      user: {
        name: "박태준",
        imgUrl:
          "http://k.kakaocdn.net/dn/jAifn/btqBpY1gzJl/XpCUZvd9kV19OCq9AsZ5J0/img_110x110.jpg",
      },
      url:
        "https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=100&oid=025&aid=0003003097",
      article:
        "중국 정부가 올해 국방예산을 전년 대비 6.6% 증액했다. 수치상으로는 20년 만에 가장 낮은 증가폭이지만 올해 중국 경제가 코로나19 쇼크로 경제성장률이 침체될 가능성을 고려할 때 오히려 상당한 증액에 해당한다는 관측이다. 22일 신화통신 등 중국매체 보도를 종합하면 리커창 총리는 이날 베이징 인민대회당에서 개막한 13기 전인대 3차 연례회의 정부공작(업무)보고에서 올해 국방예산으로 1조2700억 위안(약220조원)을 보고했다. ",
      tendency: 2,
    },
  ];
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    if (width >= 767) {
      const data: any = ClassifyCard(cards);
      setCardList(data);
    }
  };
  useEffect(() => {
    updateWidthAndHeight();
    window.addEventListener("resize", updateWidthAndHeight);
    return () => {
      window.removeEventListener("resize", updateWidthAndHeight);
    };
  }, []);
  console.log(width);
  return (
    <Container>
      <TopBar
        userInfo={userInfo}
        location={location}
        setUserInfo={setUserInfo}
      />
      <CardListContainer>
        {width >= 768 ? (
          cardList.map((item: any, i: number) => (
            <DesktopCardList cardList={item} key={i} />
          ))
        ) : (
          <MobileCardList cardList={cards} />
        )}
      </CardListContainer>
      <Command
        userInfo={userInfo}
        location={location}
        setLocation={setLocation}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CardListContainer = styled.div`
  display: flex;
  height: calc(100% - 250px);
  width: 100%;
  max-width: 1100px;
  margin: auto;
`;
