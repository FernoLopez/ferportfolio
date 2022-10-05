import React from 'react'
import profileimg from '../../assets/Polish_20220901_113636931.png'
import { useRef } from 'react'
import './Home.css'
import About from '../About/About'
import Abilities from '../Abilities/Abilities'
import SoftSkills from '../SoftSkills/SoftSkills'
import Portfolios from '../Portfolios/Portfolios'
import { useNavigate } from 'react-router-dom'
import Contact from '../Contact/Contact'

const Home = () => {

    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView()  
    
    const navigate = useNavigate()
    
    const clickAction = () => 
      navigate('/cv')
      
  return (
        <main className='home_container'>
        <div className='imgprofile_container'>
        <section id="home" className="demo">
        <img src={profileimg} alt='profile-img' className='profile_img'/>
        <h2 className='title_name'>Ferno Lopez</h2>
        <button onClick={clickAction} className='button_cv'>My CV</button> 
        <hr></hr>
        <p className='info_style'>FullStack web developer</p>
        <p className='info_style'>UX/UI Designer</p>
        <h3 className='info_title'>1 year experience</h3> 
        <> 
         <div ref={myRef}></div> 
         <a onClick={executeScroll}><span></span></a> 
        </>
        </section>
        <About />
        <Abilities />
        <SoftSkills />
        <Portfolios />
        <Contact />
        </div>
    </main>
  )
}

export default Home