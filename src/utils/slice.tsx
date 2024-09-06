import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name:"slice",
  initialState:{
    items:["burger","pizza"]
  },
  reducers:{
    addItem:(state,action)=>{
      // mutating the state here
    state.items.push(action.payload)
    },
    removeItem:(state) => {
      state.items.pop()
    },
    clearItem: (state) => {
      state.items.length = 0 // []
    }
  }
})


export const {addItem,removeItem,clearItem} = slice.actions

export default slice.reducer
