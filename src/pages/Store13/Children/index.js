/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler, useState } from 'react'
import { useCall1Query, useCall2Query } from '@redux/Store13/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [skip, setSkip] = useState(true)
  const { data, error, isLoading } = useCall1Query(3)
  const query2 = useCall2Query(undefined, {
    pollingInterval: 2000,
    skip
  })
  const { email } = useCall1Query(undefined, {
    selectFromResult: (d) => ({
      email: d?.data ? d.data[0].email : ''
    })
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Call1</div>
      {data.map((d) => {
        return <div key={d.email}>{d.email}</div>
      })}
      <br />
      <div>Call2</div>
      <button onClick={() => setSkip(!skip)}>
        Start Call2 every 2s ({skip.toString()})
      </button>
      <button onClick={() => query2.refetch()}>Force Refetch call2</button>
      <div>Initialized: {query2.isUninitialized.toString()}</div>
      <div>Fetching: {query2.isFetching.toString()}</div>
      <div>Success: {query2.isSuccess.toString()}</div>
      <br />
      <div>Call3</div>
      {email}
    </Profiler>
  )
}

export default Home
