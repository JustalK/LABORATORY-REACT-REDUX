/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import store from '@redux/Store4'
import { Provider } from 'react-redux'
import Children from './Children'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Store4 = () => {
  return (
    <Provider store={store}>
      <Children ids="first" />
    </Provider>
  )
}

export default Store4
