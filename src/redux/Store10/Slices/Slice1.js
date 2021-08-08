import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export const slice = createSlice({
  name: 'books',
  initialState: adapter.getInitialState(),
  reducers: {
    bookAdded: adapter.addOne,
    booksReceived(state, action) {
      adapter.setAll(state, action.payload.books)
    }
  }
})

export const { bookAdded, booksReceived } = slice.actions

export default slice.reducer
