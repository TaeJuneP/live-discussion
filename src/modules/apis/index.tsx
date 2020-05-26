import axios from "axios";

export const requestLogin = async (token: string) => {
  return await axios({
    method: "post",
    url: "/auth/kakao",
    headers: { Authorization: token },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCommand = async (
  content: string,
  url: string[],
  token: string,
  tendency: number
) => {
  
  console.log(content, url, token, tendency);
};
