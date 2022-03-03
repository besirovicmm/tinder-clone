import React from 'react'
import whiteLogo from '../logos/tinder-white.png'
import colorLogo from '../logos/tinder-color.png'

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img src={minimal ? colorLogo : whiteLogo} alt="" className="logo" />
      </div>
      {!authToken && <button className="nav-buttton">Log In</button>}
    </nav>
  )
}

export default Nav
