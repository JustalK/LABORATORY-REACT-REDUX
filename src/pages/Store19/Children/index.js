/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import { useCall1Query } from '@redux/Store19/Slices/Splits/Calls'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * From the store, it will pass through onQueryStarted for updating the request as soon as the query is made
 * but it will start the query after (Optimistic update)
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const { data, error, isLoading } = useCall1Query()

  console.log(data, error, isLoading)
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Run a query from an extended api (look console)</div>
    </Profiler>
  )
}

export default Home
