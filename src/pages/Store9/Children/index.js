/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '@redux/Store9/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const val = useSelector((state) => state.users.value)
  const status = useSelector((state) => state.users.status)
  const dispatch = useDispatch()

  console.log(val)
  return (
    <div>
      <button onClick={() => dispatch(fetchUsers())}>All</button>
      global count: {val} | status : {status}
    </div>
  )
}

export default Home
