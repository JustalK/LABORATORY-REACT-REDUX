import { configureStore } from '@reduxjs/toolkit'
import Slice1 from './Slices/Slice1'

export default configureStore({
  reducer: {
    counter: Slice1
  }
})
