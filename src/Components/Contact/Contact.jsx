import React from 'react'
import './Contact.css'
import phone from '../../assets/phone 3.svg'
import email from '../../assets/mail 3.svg'
import Popup from 'reactjs-popup'

const Contact = () => {

  return (
    <section id="contact" className="demo">
    <article className='contact_container'>
      <h1 className='title_name'>Contact</h1>
    <div className="parent">
    <Popup trigger={<button className='round-1'> Phone</button>} position="bottom center" nested>
    <div className='content_style'>
      <img className='size-img' src={phone} alt='phone' onClick={() => showImage()}></img>
      <p>+57 319 7935583</p>
    </div>
  </Popup>
  <div className='parent'>
  <Popup trigger={<button className='round-1'> Email </button>} position="bottom center" nested>
    <div className='content_style'>
      <img className='size-img' src={email} alt='email' onClick={() => showImage()}></img>
      <p>fernolopez@outlook.es</p>
    </div>
  </Popup>
    </div>
    </div>
    <a href="./Home"><span></span></a>
</article>
</section>
  )
}

export default Contact