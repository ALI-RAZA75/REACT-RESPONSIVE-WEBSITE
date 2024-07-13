import React from 'react'
import './Hero.css'
import dark_arow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>TETRA CRYSTALS</h1>
            <p>ALL YOUR RECRUITMENT WORRIES ARE OUTSOURCED.</p>
            <button className='btn'>Explore More <img src={dark_arow} alt="" className='hero-btn-icon' /></button>
        </div>
    </div>
  )
}

export default Hero