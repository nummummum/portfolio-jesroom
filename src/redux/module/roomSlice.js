import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    list: [{ title: "", price: 0, filename: "", detailobj: [""] }],
  },
  reducers: {
    signRoom: (state, action) => {
      state.list = [...state.list, action.payload];
      console.log(state.list);
    },
    deleteRoom: (state, action) => {
      state.list.map((item, index) => {
        if (item.title.includes(action.payload)) {
          item.title.filter((word) => word != action.payload);
        }
      });
    },
  },
});
