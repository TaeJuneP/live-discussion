export const ClassifyCard = (cardList: any) => {
  const leftCardList: any = [];
  const rightCardList: any = [];
  Object.keys(cardList).map((num: any) => {
    if (cardList[num].tendency === 1) {
      leftCardList.push(cardList[num]);
    } else {
      rightCardList.push(cardList[num]);
    }
  });
  return [leftCardList, rightCardList];
};
