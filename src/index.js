/**
 * The module managing the entry point of the APP
 * @module Main
 */

import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import App from '@src/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '@redux/Store'

const store = createStore(rootReducer)

/**
 * @function render
 * Render the Home component inside the element root of the index page
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
