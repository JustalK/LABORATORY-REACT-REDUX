/**
 * The module managing the home page
 * @module Home
 */

import React, { useState } from 'react'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@redux/Store5/Slices/Slice1'
import { addNumber } from '@redux/Store5/Slices/Slice2'

const selectNumberUnder5 = createSelector(
  (state) => {
    // console.log('Selector recall')
    return state.counterNumber.values.filter((val) => val < 5)
  },
  (values) => {
    // console.log('Selector reduce recall')
    return values.reduce((acc, val) => acc + val, 0)
  }
)

const memoizeCounter = createSelector(
  (state) => {
    // console.log('Mmeoize counter recall')
    return state?.counter?.value
  },
  (values) => {
    return values
  }
)

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  // console.log('Re-render')
  const [val, setVal] = useState(0)
  const count = useSelector((state) => {
    // console.log('useSelector Recall')
    return state.counter.value
  })
  const memoizeCount = useSelector(memoizeCounter)
  const countNumberUnder5 = useSelector(selectNumberUnder5)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => setVal((c) => c + 1)}>Increment Val</button>
      <button onClick={() => dispatch(increment())}>Increment Count</button>
      <button onClick={() => dispatch(decrement())}>Decrease Count</button>
      <button onClick={() => dispatch(addNumber({ number: 2 }))}>
        Add Number 5
      </button>
      global count: {count} | global memoize count: {memoizeCount} | global
      countNumberUnder5: {countNumberUnder5} | val: {val}
    </div>
  )
}

export default Home
