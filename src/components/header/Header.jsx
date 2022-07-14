import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../assets/me_2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <header>
    <div className="container header_container">
        <h5>Hello i am</h5>
        <h1>MD Rabby Shek Suvo</h1>
        <h5 className="text-light">
            Web Designer
        </h5>
        <CTA />
        <HeaderSocials />



        <div className="me">
            <img src={ME} alt="me" />
        </div>


      <a href="#footer" className='scroll_down'>Scrool Down</a>

    </div>

  </header>
  )
}

export default Header
