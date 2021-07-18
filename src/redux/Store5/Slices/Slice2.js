import { createSlice } from '@reduxjs/toolkit'

export const counterNumber = createSlice({
  name: 'counterNumber',
  initialState: {
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  reducers: {
    addNumber: (state, props) => {
      state.values.push(props.payload.number)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addNumber } = counterNumber.actions

export default counterNumber.reducer
