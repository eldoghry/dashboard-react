import { Token } from "@mui/icons-material";
import axios from "axios";

const BASEURL = "http://localhost:3000/api/";

const cookie = localStorage.getItem("persist:dashboard");

const TOKEN = cookie
  ? JSON.parse(JSON.parse(cookie)?.user)?.currentUser?.ACCESS_TOKEN
  : null;

export const publicRequester = axios.create({
  baseURL: BASEURL,
});

export const userRequester = axios.create({
  baseURL: BASEURL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
