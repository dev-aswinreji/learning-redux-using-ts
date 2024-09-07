import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    items: ["burger", "pizza"]
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.items.pop()
    },
    clearItem: (state) => {
      // Modifying state directly in react-toolkit
      state.items.length = 0 // we cannot assign [] directly
      // Either we can return and [] array this will modify the state to []
      // return { items: [] }
    }
  }
})


export const { addItem, removeItem, clearItem } = slice.actions

export default slice.reducer
