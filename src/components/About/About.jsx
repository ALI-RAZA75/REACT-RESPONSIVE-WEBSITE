import React from 'react'
import './About.css'
import aboutImage from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="left-about">
            <img src={aboutImage} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className="right-about">
           <h3>About University</h3>
           <h2>Nuturing Tommorow's Leaders Today</h2>
           <p>Tetra Crystals got its start from Recruitment(RPO), Data Entry, Graphics Designing and evantually got into developing enterprise level solutions using model-based development tools that enabled our products and services to span multiple platforms and databases. Our early success with large enterprise customers across multiple platforms and databases instilled a development culture with a focus on tools, repeatable development processes, application scalability and component reuse; a culture that is still very much part of this company.</p>
        </div>
    </div>
  )
}

export default About