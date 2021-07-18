import { configureStore } from '@reduxjs/toolkit'
import Slice1 from './Slices/Slice1'
import Slice2 from './Slices/Slice2'

export default configureStore({
  reducer: {
    counter: Slice1,
    counterNumber: Slice2
  }
})
