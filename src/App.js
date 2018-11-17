import React from 'react'
import { Router, Link, Redirect } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import Navigation from './components/navigation/Navigation';
import './app.css'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div className="content">
        <Redirect from="/" to="/home" />
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
