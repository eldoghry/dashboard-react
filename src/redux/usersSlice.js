import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users", //customers
  initialState: {
    customers: [],
    fetching: false,
    success: false,
    error: false,
  },

  reducers: {
    usersFetching(state) {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },

    usersFailure(state) {
      state.success = false;
      state.fetching = false;
      state.error = true;
      state.users = [];
    },

    usersSuccessful(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      state.users = [...action.payload.users];
    },

    reset(state) {
      state.users = [];
      state.fetching = false;
      state.success = false;
      state.error = false;
    },
  },
});

export const { usersFetching, usersFailure, usersSuccessful, reset } =
  usersSlice.actions;

export default usersSlice.reducer;
