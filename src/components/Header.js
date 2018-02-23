import React, { Component } from 'react'
import Logo from '@/assets/logo.svg'

class Header extends Component {
  render () {
    return (
      <div className="app__header">
        <img src={Logo} className="app__header__logo" />
        <h1 className="app__header__title">Welcome to React</h1>
      </div>
    )
  }
}

export default Header
