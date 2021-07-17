import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_SECONDARY } from '@constants/routes'
import Store1 from '@pages/Store1'
import Store2 from '@pages/Store2'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_SECONDARY}>
          <Store2 />
        </Route>
        <Route path={ROUTE_HOME}>
          <Store1 />
        </Route>
      </Switch>
    </Router>
  )
}
