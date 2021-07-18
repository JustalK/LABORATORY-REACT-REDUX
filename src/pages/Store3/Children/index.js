/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@redux/Store3/Slices/Slice1'
import { decrement2, increment2 } from '@redux/Store3/Slices/Slice2'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const count2 = useSelector((state) => {
    return state.counter2.value
  })
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment Count</button>
      <button onClick={() => dispatch(decrement())}>Decrease Count</button>
      <button onClick={() => dispatch(increment2())}>Increment Count</button>
      <button onClick={() => dispatch(decrement2())}>Decrease Count</button>
      global count: {count} | global count2: {count2}
    </div>
  )
}

export default Home
