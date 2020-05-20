import axios from "axios";
import { requestLogin } from "../../../modules/apis";
import MockAdapter from "axios-mock-adapter";

test("should fetch users", async () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  mock.onPost("/auth/kakao").reply(200, { data: "" });
  const data = await requestLogin("");
  expect(data).toEqual({ data: "" });
});
