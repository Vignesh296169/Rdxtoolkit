import { createSlice, nanoid } from "@reduxjs/toolkit";

const Listslice = createSlice({
  name: "list",
  initialState: {
    search: "",
    carlst: [],
  },
  reducers: {
    changesearch(state, action) {
      state.search = action.payload;
    },
    addcar(state, action) {
      state.carlst.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
   
    },
    removecar(state, action) {
      const updated = state.carlst.filter((car) => car.id !== action.payload);
      state.carlst = updated;
    },
  },
});
export const { changesearch, addcar, removecar } = Listslice.actions;
export const carreducer= Listslice.reducer;
