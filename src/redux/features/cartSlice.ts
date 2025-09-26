import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }: PayloadAction<CartItem>) => {
      const productIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (productIndex >= 0) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      localStorage.setItem("cart_items", JSON.stringify(state.cart));
    },
    remove_cart_product: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      localStorage.setItem("cart_items", JSON.stringify(state.cart));
    },
    clear_cart: (state) => {
      state.cart = [];
      localStorage.setItem("cart_items", JSON.stringify(state.cart));
    },
    set_cart: (state, { payload }: PayloadAction<CartItem[]>) => {
      state.cart = payload;
    },
  },
});

export const { add_cart_product, remove_cart_product, clear_cart, set_cart } = cartSlice.actions;

export const hydrateCart = () => (dispatch: any) => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart_items");
    if (cart) {
      dispatch(set_cart(JSON.parse(cart)));
    }
  }
};

export default cartSlice.reducer;