/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartItems: any[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
    hydrateCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.cartItems = JSON.parse(savedCart);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, hydrateCart } = cartSlice.actions;
export default cartSlice.reducer;