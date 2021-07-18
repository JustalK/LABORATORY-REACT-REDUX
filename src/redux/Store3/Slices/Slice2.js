import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter2',
  initialState: {
    value: 0
  },
  reducers: {
    increment2: (state) => {
      state.value += 1
    },
    decrement2: (state) => {
      state.value -= 1
    },
    incrementByAmount2: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment2, decrement2, incrementByAmount2 } =
  counterSlice.actions

export default counterSlice.reducer
