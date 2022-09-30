import { publicRequester } from "../apiRequester";
import { loginFetching, loginFailure, loginSuccessful } from "./userSlice";

// TODO: add used api calles here to dispatched with redux
// api cb, dispatch cb

export const login = async (credentials, dispatch) => {
  try {
    dispatch(loginFetching());
    const res = await publicRequester.post("auth/login", {
      username: credentials.username,
      password: credentials.password,
    });

    if (res.data.isAdmin) {
      dispatch(loginSuccessful({ user: res.data }));
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
