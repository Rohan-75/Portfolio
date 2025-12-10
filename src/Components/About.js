import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          
<div class="about">
  Hi, my name is <b>Vivek Kumar</b> and I am from New Delhi, India.<br/>
  I'm a <b>Full Stack Web Developer</b> and a final year student pursuing 
  <b>B.Tech in Civil Engineering (Minor in CSE)</b> at IIT Dharwad.<br/><br/>

  I have worked as a <b>Research & Development Intern</b> at IIT Dharwad, 
  where I performed structured material testing, data analysis, and research documentation 
  for self-healing materials.<br/>

  I love building clean, functional, and user-centric projects — 
  you can explore some of my work in the projects section.<br/><br/>

  I am <b>open</b> to collaborations, internships, or software development roles where I can contribute and grow. 
  Feel free to connect with me — links are available in the footer.<br/>
</div>

          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About