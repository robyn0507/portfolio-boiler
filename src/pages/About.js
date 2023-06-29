import React from 'react'

import './About.css'

function Introduction() {
  return (
    <div className='introduction-container'>
      <h2>Introduction</h2>
      <p>Hi, my name is Robyn. I'm a software engineer based in Las Vegas, NV.</p>
    </div>
  );
}


function Education() {
  return (
    <div className='education-container'>
      <h2>Education</h2>
      <div className='education'>
        <div className='education-card'>
          <h3>W3schools.com, Remote</h3>
          <p>Web development bootcamp</p>
          <p>March 2023 - Current</p>
        </div>
      </div>
    </div>
  )
}

function FunFact() {
  return (
    <div className='fun-fact-container'>
      <h2>Fun Fact</h2>
      <p>I'm an animal lover and vegan.</p>
    </div>
  )
}

function Skills({ newSkills }) {
  return (
    <div className='skills-container'>
      <h2>Skills</h2>
      <div className='skills'>
        {newSkills.map((skill, index) => (
          <div className='skill-card' key={index}>
            <div className='skill-icon' style={{ backgroundColor: skill.color }}>
              <i className={skill.icon}></i>
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}



function WorkExperience() {
  return (
    <div className='work-experience-container'>
      <h2>Work Experience</h2>
      <div className='work-experience'>
        <div className='work-experience-card'>
          <h3>Klaviyo</h3>
          <p>Product Expert</p>
          <p>June 2022 - Current</p>
        </div>
      </div>
    </div>
  )
}

function Hobbies() {
  return (
    <div className='hobbies-container'>
      <h2>Hobbies:</h2>
      <p> I love to garden and do arts and crafts</p>
    </div>
  )
}


export default function About({ skills }) {
  return (
    <div className='about-container'>
      <h2>About</h2>
      <Introduction />
      <div className="experience-section">
        <WorkExperience />
        <Education />
      </div>
      <Skills newSkills={skills} />
      <Hobbies />
      <FunFact />
    </div>
  )
}