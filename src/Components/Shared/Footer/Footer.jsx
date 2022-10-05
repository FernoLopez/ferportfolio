import React from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <footer className="footer">
    <p className='footer__text'>Links</p>
    <ul className="redes">
      <li className="redes__items">
        <a href="https://www.linkedin.com/in/ferno-lopez" target="_blank" rel="noopener noreferrer" className="redes__links">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
      <li className="redes__items">
        <a href="https://soundcloud.com/ferno-lopez" target="_blank" rel="noopener noreferrer" className="redes__links">
        <i className="fa-brands fa-soundcloud"></i>
        </a>
      </li>
    </ul>
  </footer>

  )
}

export default Footer