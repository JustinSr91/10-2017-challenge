import React from 'react'
import { render } from 'react-dom'
import App from './app'
import { Router, Route, hashHistory } from 'react-router'

render(
  (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={ App } />
    </Route>
  </Router>
  ),
  document.getElementById('app')
)
