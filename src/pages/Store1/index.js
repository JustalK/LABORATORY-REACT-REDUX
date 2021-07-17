/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { createStore } from 'redux'
import rootReducer from '@redux/Store1'
import { Provider } from 'react-redux'
import Children from './Children'

const store = createStore(rootReducer)

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  )
}

export default Home
