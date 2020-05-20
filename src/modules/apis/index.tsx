import axios from "axios";

export async function requestLogin(token: string) {
  await axios({
    method: "get",
    headers: { Authorization: token },
  })
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
}
