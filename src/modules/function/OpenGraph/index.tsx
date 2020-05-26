import axios from "axios";

export const getScript = async (url: string) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  return await axios({
    method: "get",
    url: proxy + url,
  }).then(async (res) => {
    return getOpenGraph(res.data);
  });
};

const getOpenGraph = (script: any) => {
  let ogTitle = "";
  let ogImage = "";
  const ogTitleCheck = "og:title";
  const ogImageCheck = "og:image";
  const firstCut = `content="`;
  const endCut = `"/>`;
  const data = script.split("\n");
  for (let i = 0; i < data.length; i++) {
    if (data[i].indexOf(ogTitleCheck) !== -1) {
      const start = data[i].indexOf(firstCut) + 9;
      const end = data[i].indexOf(endCut);
      ogTitle = data[i].substring(start, end);
    } else if (data[i].indexOf(ogImageCheck) !== -1) {
      let data1 = data[i].indexOf(firstCut) + 9;
      let data2 = data[i].indexOf(endCut);
      ogImage = data[i].substring(data1, data2);
      break;
    }
  }
  return [ogTitle, ogImage];
};
