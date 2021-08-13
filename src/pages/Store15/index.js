/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import store from '@redux/Store15'
import { Provider } from 'react-redux'
import Children from './Children'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Store = () => {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  )
}

export default Store
