import React from 'react'
import { useRef } from 'react'
import './About.css'

const About = () => {

    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView() 

  return (
    <section id="about" className="demo">
         <article className='about_me'>
        <h1 className='title_name'>About me</h1>
        </article>
        <article className='about_p'>
        <p className='info_style'>FullStack web developer with experience in creating web applications with React JS and redux toolkit, achieving great interaction with the user using HTML, CSS and Javascript knowledge. Building applications from the server with Node and Express with deployment. Realization of API's Rest using PostgreSQL/sequalize relational database. Figma UI/UX design. Experience in Banking Inbound/Outbound Marketing. I am a musician, composer, arranger, producer and performer.</p>
        </article> 
        <> 
         <div ref={myRef}></div> 
         <a onClick={executeScroll}><span></span></a> 
        </>
        </section>
  )
}

export default About