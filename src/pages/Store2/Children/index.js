/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@redux/Store2/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      global count: {count}
    </div>
  )
}

export default Home
