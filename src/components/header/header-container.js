import React from 'react'
import './header-container.css'

class Header extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <a className='title' href='#title'>Stupid To-Dos</a>
      </div>
    )
  }
}

export default Header
