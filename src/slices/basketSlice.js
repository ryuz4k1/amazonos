import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // const index = state.items.findIndex((basketItem) => {
      //   basketItem.id === action.payload.id;
      // });
      // console.log(index);
      // let newBasket = [...state.items];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn("Cant remove");
      // }
      // state.items = newBasket;
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
