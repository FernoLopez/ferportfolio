import React from 'react'
import { useRef } from 'react'
import weather from '../../assets/weatherP1.png'
import ecommerce from '../../assets/ecom1.png'
import Rick_morty from '../../assets/rickmor1.png'
import Pokemon from '../../assets/pokedex.png'
import './Portfolios.css'

const Portfolios = () => {

  const myRef = useRef(null)
 
  const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <section id="portfolios" className={"portfolio_container" + "demo"}>
          <article className='about_me'>
        <h1 className='title_name'>My portfolios</h1>
        </article>
        <article className='cards_container'>
        <div className="card_portfolio">
        <div className="card-body">
        <div className="card_portfolio-header">
        <img src={weather} alt="Portafolio1"/>
        </div>
        <div className="slide"><h5>Weather App</h5></div>
        <div className="slide">
        <p>Weather application made from an API that displays the weather status in the specific site with a button whose functionality changes the status from degrees Celsius to Fahrenheit.</p>
        </div>
        </div>
        <ul className="network">
        <li className='network__items'>
        <a href="https://github.com/FernoLopez/Weather-App.git" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className='network__items'>
        <a href="https://ferno-weather-app.netlify.app" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-location-arrow"></i>
        </a>
        </li>
        </ul>
        </div>
        <div className="card_portfolio">
        <div className="card-body">
        <div className="card_portfolio-header">
        <img src={ecommerce} alt="Portafolio2"/>
        </div>
        <div className="slide"><h5>Ecommerce</h5></div>
        <div className="slide">
        <p> Commercial Application deployed from API for store products with search input that leads to product specifications and a cart
          that stores the products required for purchase. It works with login and protected routes</p>
        </div>
        </div>
        <ul className="redes">
        <li className='network__items'>
        <a href="https://github.com/FernoLopez/Fer-Ecommerce.git" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className='network__items'>
        <a href="https://fer-ecommerce.netlify.app" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-location-arrow"></i>
        </a>
        </li>
        </ul>
        </div>
        <div className="card_portfolio">
        <div className="card-body">
        <div className="card_portfolio-header">
        <img src={Rick_morty} alt="Portafolio3"/>
        </div>
        <div className="slide"><h5>RICK & MORTY</h5></div>
        <div className="slide">
        <p>Application deployed from API of the animated series: "Rick & Morty" with search input regarding the ID of the location and information on cards of each character.</p>
        </div>
        </div>
        <ul className="redes">
        <li className='network__items'>
        <a href="https://github.com/FernoLopez/RickandMortyAPI.git" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className='network__items'>
        <a href="https://rickandmorty-ferno-api.netlify.app" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-location-arrow"></i>
        </a>
        </li>
        </ul>
        </div>
        <div className="card_portfolio">
        <div className="card-body">
        <div className="card_portfolio-header">
        <img src={Pokemon} alt="Portafolio4"/>
        </div>
        <div className="slide"><h5>POKEDEX</h5></div>
        <div className="slide">
        <p>Application deployed from API of the animated series: "POKÉMON" with search input, select filter by type and pagination. It works with login and protected routes, and display a route by its ID.</p>
        </div>
        </div>
        <ul className="redes">
        <li className='network__items'> 
        <a href="https://github.com/FernoLopez/Pokedex.git" target="_blank" rel="noopener noreferrer" >
        <i className="fa-brands fa-github"></i>
        </a>
        </li>
        <li className='network__items'>
        <a href="https://pokedex-ferno.netlify.app" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-location-arrow"></i>
        </a>
        </li>
        </ul>
        </div>
        </article>
        <> 
         <div ref={myRef}></div> 
         <a onClick={executeScroll}><span></span></a> 
        </>
        </section>
  )
}

export default Portfolios