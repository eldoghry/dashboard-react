import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products", //customers
  initialState: {
    products: [],
    fetching: false,
    success: false,
    error: false,
  },

  reducers: {
    requestStart(state) {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },

    requestFailure(state) {
      state.success = false;
      state.fetching = false;
      state.error = true;
      state.products = [];
    },

    getProductsSuccess(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      state.products = [...action.payload.products];
    },

    deleteProductsSuccess(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
  },
});

export const {
  requestFailure,
  requestStart,
  getProductsSuccess,
  deleteProductsSuccess,
} = productsSlice.actions;

export default productsSlice.reducer;
