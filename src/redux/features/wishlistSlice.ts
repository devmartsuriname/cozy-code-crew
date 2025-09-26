/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  wishlistItems: any[];
}

const initialState: WishlistState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<any>) => {
      const existingItem = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<any>) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem('wishlist');
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;