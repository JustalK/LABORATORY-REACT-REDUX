/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useCall1Query } from '@redux/Store15/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const { data, isLoading, refetch } = useCall1Query()

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <>
      {data.map((d) => {
        return <div key={d.email}>{d.email}</div>
      })}
      <button onClick={() => refetch()}>Refecthing</button>
    </>
  )
}

export default Home
