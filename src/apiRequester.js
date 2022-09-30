import axios from "axios";

const BASEURL = "http://localhost:3000/api/";

//TODO: GET IT FROM REDUX
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzJiNTg0N2I1ODU3NTRiZmE0YmQxYjciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjQyMTAxOTUsImV4cCI6MTY2NDM4Mjk5NX0.Bx62lUM_sc3q8J9wzL8X-BkwFTvv0HT5djijSysm2m0";

export const publicRequester = axios.create({
  baseURL: BASEURL,
});

export const userRequester = axios.create({
  baseURL: BASEURL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
