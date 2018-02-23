import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <p className="app__tips">To get started, edit <code>src/App.js</code> and save to reload.</p>
      </div>
    )
  }
}

export default App
