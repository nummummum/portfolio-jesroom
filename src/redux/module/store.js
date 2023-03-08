import { configureStore } from "@reduxjs/toolkit";
import { furnitureSlice } from "./furnitureSlice";
import { roomSlice } from "./roomSlice";

const store = configureStore({
  reducer: {
    room: roomSlice.reducer,
    furniture: furnitureSlice.reducer,
  },
});

export default store;
