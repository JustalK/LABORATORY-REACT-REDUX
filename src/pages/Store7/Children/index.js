/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { combineReducers } from 'redux'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { decrement, increment } from '@redux/Store7/Slices/Slice1'
import Slice2 from '@redux/Store7/Slices/Slice2'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const store = useStore()

  const newRootReducer = combineReducers({
    counter: Slice2
  })

  return (
    <div>
      <button onClick={() => store.replaceReducer(newRootReducer)}>
        Reverse reducer
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      global count: {count}
    </div>
  )
}

export default Home
