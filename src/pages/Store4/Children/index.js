/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@redux/Store4/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = ({ ids }) => {
  const count = useSelector((state) => state.counter.value)
  const id = useSelector((state) => state.counter.ids[ids])
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      global count: {count} | global count: {id}
    </div>
  )
}

export default Home
