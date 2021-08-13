/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler, useState } from 'react'
import GrandChildren from './GrandChildren'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * If we keep the data hidden for more than 5s seconds, the data will be
 * refetch. It happen because there is nothing subscribing to the call1 and
 * keepUnusedDataFor = 5
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [skip, setSkip] = useState(false)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>
        <button onClick={() => setSkip(!skip)}>
          Set Skip ({skip.toString()})
        </button>
      </div>
      {!skip && <GrandChildren />}
    </Profiler>
  )
}

export default Home
