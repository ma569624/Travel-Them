import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const crudSlice = createSlice({
  name: 'curd',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = crudSlice.actions

export default crudSlice.reducer