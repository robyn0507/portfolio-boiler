import React from 'react'

import './Home.css'

function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-text">
        <h1>Hi, I'm <span className='highlight'>Robyn</span></h1>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  )
}

function Technologies({ skills }) {
  return (
    <div className='technologies-container'>
      <h2>Technologies</h2>
      <ul className='technologies'>
        {skills.map((skill, index) => (
          <li key={index} className='technology-card'>
            <div className='technology-icon-container'>
              <i className={skill.icon} style={{ color: skill.color }}></i>
            </div>
            <div className='technology-text'>
              <h3>{skill.name}</h3>
              <p>{skill.years} years</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


function FeaturedProjects() {
  return (
    <div className='featured-projects-container'>
      <h2>Featured Projects</h2>
      <div className='featured-projects'>
        <div className='project'>
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className='project'>
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className='project'>
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </div>
  )
}

function Location() {
  return (
    <div className='location-container'>
      <h2>Location</h2>
      <p>Las Vegas, NV</p>
    </div>
  )
}

export default function Home(props) {

  const { skills } = props;


  return (
    <div className='home-container'>
      <Hero />
      <Technologies skills={skills} />
      <FeaturedProjects />
      {/* <Location /> */}
    </div>
  )
}
