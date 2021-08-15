import { configureStore } from '@reduxjs/toolkit'
import Slice1 from './Slices/Slice1'

const store = configureStore({
  reducer: {
    [Slice1.reducerPath]: Slice1.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Slice1.middleware)
})

export default store
