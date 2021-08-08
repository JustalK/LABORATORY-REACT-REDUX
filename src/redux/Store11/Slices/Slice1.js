import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const adapter = createEntityAdapter({
  selectId: (book) => book.bookId,
  // 1,0 ou -1
  sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export const slice = createSlice({
  name: 'books',
  initialState: adapter.getInitialState(),
  reducers: {
    bookAdded: adapter.addOne,
    bookUpdated: adapter.updateOne,
    bookRemove: adapter.removeOne,
    booksReceived(state, action) {
      adapter.setAll(state, action.payload.books)
    }
  }
})

export const { bookUpdated, bookAdded, booksReceived, bookRemove } =
  slice.actions

export default slice.reducer
