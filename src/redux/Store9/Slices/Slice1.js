import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users', async () => {
  const users = await fetch('https://randomuser.me/api/?results=2')
  const { results } = await users.json()
  return results
})

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    status: 'idle'
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.value = action.payload
        state.status = 'idle'
      })
  }
})

export default counterSlice.reducer
