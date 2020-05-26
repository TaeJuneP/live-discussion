export const ClassifyCommand = (content: string) => {
  const description = content.split(" ");
  const http = "http://";
  const https = "https://";
  const urlArr: string[] = [];
  description.map((item: string) => {
    if (item.indexOf(http) !== -1 || item.indexOf(https) !== -1) {
      urlArr.push(item);
    }
  });
  return urlArr;
};
