/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler, useState } from 'react'
import store from '@redux/Store8'
import { Provider } from 'react-redux'
import Children1 from './Children1'
import Children2 from './Children2'

const callback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  )
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Store8 = () => {
  const [val, setVal] = useState(0)

  console.log('re-render')
  return (
    <Profiler id="Checking" onRender={callback}>
      <Provider store={store}>
        <button onClick={() => setVal((v) => v + 1)}>Re-render</button>
        <div>{val}</div>
        <Children1 />
        <Children2 />
      </Provider>
    </Profiler>
  )
}

export default Store8
