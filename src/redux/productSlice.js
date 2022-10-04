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
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },

    addProductSuccess(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      state.products.push(action.payload.product);
    },

    updateProductSuccess(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      const index = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      state.products[index] = {
        ...action.payload.product,
      };
    },
  },
});

export const {
  requestFailure,
  requestStart,
  getProductsSuccess,
  deleteProductsSuccess,
  addProductSuccess,
  updateProductSuccess,
} = productsSlice.actions;

export default productsSlice.reducer;
