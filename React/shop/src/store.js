import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCnt(state, id) {
      let idx = state.findIndex((v) => {
        return v.id == id.payload;
      });
      state[idx].count++;
    },
    addCart(state, data) {
      let id = data.payload.id;
      let idx = state.findIndex((v) => {
        return v.id == id;
      });

      if (idx === -1) state.push(data.payload);
      else state[idx].count++;
    },
  },
});

export let { increaseCnt, addCart } = cart.actions;

export default configureStore({
  reducer: { user: user.reducer, cart: cart.reducer },
});
