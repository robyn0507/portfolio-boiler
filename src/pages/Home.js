import React from 'react'

import './Home.css'

function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-text">
        <h1>Hi, I'm <span className='highlight'>John</span></h1>
        <h2>Full Stack Web Developer</h2>
      </div>
    </div>
  )
}

function Technologies() {
  return (
    <div className='technologies-container'>
      <ul className='technologies'>
        <li className='technology-card'>HTML</li>
        <li className='technology-card'>CSS</li>
        <li className='technology-card'>JavaScript</li>
        <li className='technology-card'>React</li>
        <li className='technology-card'>Node</li>
        <li className='technology-card'>Express</li>
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
      <p>San Diego, CA</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Technologies />
      <FeaturedProjects />
      {/* <Location /> */}
    </div>
  )
}
