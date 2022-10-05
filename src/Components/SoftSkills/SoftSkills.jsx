import React from 'react'
import { useRef } from 'react'
import Progress_bar from '../Progress_bar/Progress_bar'
import './SoftSkills.css'

const SoftSkills = () => {

    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <section id="softSkills" className="demo">
        <h1>Soft Skills</h1>
        <article className='softSkills_container'>Motivation
        <Progress_bar bgcolor="orange" progress='100' height={30} />Comunication
        <Progress_bar bgcolor="red" progress='90'  height={30} />Design
        <Progress_bar bgcolor="#99ff66" progress='80'  height={30} />Frontend abilities
        <Progress_bar bgcolor="#ff00ff" progress='80'  height={30} />Backend abilities
        <Progress_bar bgcolor="#99ccff" progress='80'  height={30} />
        <> 
         <div ref={myRef}></div> 
         <a onClick={executeScroll}><span></span></a> 
        </>
        </article>
        </section> 
  )
}

export default SoftSkills