import { createSlice } from "@reduxjs/toolkit";

export const furnitureSlice = createSlice({
  name: "furnitureSlice",
  initialState: { list: [{ title: "", price: 0, filename: "" }] },
  reducers: {
    signFurniture: (state, action) => {
      state.list = [...state.list, action.payload];
      console.log(state.list);
    },
    deleteFurniture: (state, action) => {
      state.list.map((item, index) => {
        if (item.title.includes(action.payload)) {
          item.title.filter((word) => word != action.payload);
        }
      });
    },
  },
});
