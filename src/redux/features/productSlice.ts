import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: any[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    set_products: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { set_products } = productSlice.actions;
export default productSlice.reducer;