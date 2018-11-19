import React from 'react'
import { Router, Link, Redirect } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

import './app.css'

const App = () => (
  <Router>
    <div className="root-container">
      <Navigation />
      <main className="content">
        <Redirect from="/" to="/home" />
        <Routes />
      </main>
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
