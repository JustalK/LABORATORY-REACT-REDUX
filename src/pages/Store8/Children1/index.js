/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '@redux/Store8/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const dispatch = useDispatch()

  console.log('Re-render Children Button')
  return (
    <div>
      <div>================== CHILDREN 1 ===================</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <div>================== CHILDREN 1 END ===================</div>
    </div>
  )
}

export default Home
