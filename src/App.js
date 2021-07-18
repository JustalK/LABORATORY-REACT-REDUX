import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from '@constants/routes'
import Store1 from '@pages/Store1'
import Store2 from '@pages/Store2'
import Store3 from '@pages/Store3'
import Store4 from '@pages/Store4'
import Store5 from '@pages/Store5'
import Store6 from '@pages/Store6'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROUTE_6}>
          <Store6 />
        </Route>
        <Route path={ROUTES.ROUTE_5}>
          <Store5 />
        </Route>
        <Route path={ROUTES.ROUTE_4}>
          <Store4 />
        </Route>
        <Route path={ROUTES.ROUTE_3}>
          <Store3 />
        </Route>
        <Route path={ROUTES.ROUTE_2}>
          <Store2 />
        </Route>
        <Route path={ROUTES.ROUTE_HOME}>
          <Store1 />
        </Route>
      </Switch>
    </Router>
  )
}
