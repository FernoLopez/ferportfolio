import React, { useRef } from 'react' 
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../../assets/Polish_20220920_124758567.png' 
import './Header.css'

const Header = () => {

    const navbar = useRef()

    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar_open')
    }

  return (
    <header className='header'>
        <img src={logo} alt='imglogo' className='imglogo'/> 
        <div onClick={clickMenuHam} className="header_menuham">
        <i className="fa-solid fa-bars"></i>
        </div>
        <nav ref={navbar} className="navbar">
        <ul className="navbar_list">
        <hr></hr>
          <li className="navbar_items">
            <Link 
                to='/#home' 
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">Home</p>
            </Link>
          </li>
          <li className="navbar_items">
            <Link 
                to='/#about' smooth
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">About me</p>
            </Link>
          </li>
          <li className="navbar_items">
            <Link 
                to='/#abilities' smooth 
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">Abilities</p>
            </Link>
          </li>
          <li className="navbar_items">
            <Link 
                to='/#softSkills' smooth
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">Soft skills</p>
            </Link>
          </li>
          <li className="navbar_items">
            <Link 
                to='/#portfolios' smooth
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">My portfolios</p>
            </Link>
          </li>
          <li className="navbar_items">
            <Link 
                to='/#contact' smooth
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <p className="navbar_label">Contact</p>
            </Link>
          </li>
          <hr></hr>
        </ul>
        </nav>
    </header>
  )
}

export default Header