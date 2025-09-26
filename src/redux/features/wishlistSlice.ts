import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishListItem {
  id: number;
  title: string;
  price: number;
  img: string;
}

interface WishlistState {
  wishlist: WishListItem[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    add_to_wishlist: (state, { payload }: PayloadAction<WishListItem>) => {
      const isExist = state.wishlist.find((item) => item.id === payload.id);
      if (!isExist) {
        state.wishlist.push(payload);
      }
    },
    remove_wishlist_product: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== payload.id);
    },
  },
});

export const { add_to_wishlist, remove_wishlist_product } = wishlistSlice.actions;
export default wishlistSlice.reducer;