/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { connect } from 'react-redux'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = ({ count, increaseRedesign, decreaseRedesign }) => {
  return (
    <div>
      <button onClick={() => increaseRedesign()}>Increment</button>
      <button onClick={() => decreaseRedesign({ type: 'DECREMENT' })}>
        Decrease
      </button>
      global count: {count}
    </div>
  )
}

const states = (state) => {
  return { count: state }
}

const dispatcher = (dispatch) => ({
  increaseRedesign: () => dispatch({ type: 'INCREMENT' }),
  decreaseRedesign: (type) => dispatch(type)
})

export default connect(states, dispatcher)(Home)
