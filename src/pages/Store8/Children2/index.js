/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector } from 'react-redux'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const count = useSelector((state) => state.counter.value)

  console.log('Re-render Children Result')
  return <div>global count from children2: {count}</div>
}

export default Home
