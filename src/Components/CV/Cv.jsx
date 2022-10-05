import React from 'react'
import cv from '../../assets/Curriculum Vitae Fotógrafo Simple Gris y Amarillo.png'
import './Cv.css'

const Cv = () => {
  return (
    <section>
      <h1 className='cv_title'>My CV</h1>
      <article>
        <img src={cv} alt='my_Cv' className='my_cv'/>
      </article>
    </section>
  )
}

export default Cv