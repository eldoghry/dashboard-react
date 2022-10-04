import { publicRequester, userRequester } from "../apiRequester";
import { loginFetching, loginFailure, loginSuccessful } from "./userSlice";
import { usersFetching, usersFailure, usersSuccessful } from "./usersSlice";
import {
  requestFailure,
  requestStart,
  getProductsSuccess,
  deleteProductsSuccess,
} from "./productSlice";

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

//get Users list
export const getUsers = async (dispatch) => {
  try {
    dispatch(usersFetching());
    const res = await userRequester.get("user");
    console.log(res);
    dispatch(usersSuccessful({ users: res.data }));
  } catch (error) {
    dispatch(usersFailure());
  }
};

//get Products List
export const getProducts = async (dispatch) => {
  try {
    dispatch(requestStart());
    const res = await userRequester.get("product");
    dispatch(getProductsSuccess({ products: res.data }));
  } catch (error) {
    dispatch(requestFailure());
  }
};

//delete Product
export const deleteProduct = async (dispatch, id) => {
  try {
    console.log("deleting");
    dispatch(requestStart());
    // await userRequester.delete(`product${id}`);
    dispatch(deleteProductsSuccess(id));
  } catch (error) {
    dispatch(requestFailure());
  }
};
