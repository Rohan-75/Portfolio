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
          
          <div className="about">
            <p>
              Hi, I am <b>Vivek Kumar</b>, a Final year student at <b>IIT Dharwad</b>. <br />
              I am pursuing B.Tech in Civil Engineering with a <b>Minor in Computer Science</b>.<br /><br />

              I am a passionate <b>Software Developer</b> with a strong aptitude for <b>Mathematical Logic</b> (RMO Qualified) and <b>Data Structures</b>.
              My technical expertise lies in building scalable software solutions and full-stack applications.<br /><br />

              <b>Key Highlights of my journey:</b>
              <ul>
                <li style={{listStyleType:'none', marginBottom:'5px'}}>🚀 worked as a <b>Coding Prompt Engineer</b> at Remotasks, evaluating <b>LLM code</b> and applying RLHF strategies.</li>
                <li style={{listStyleType:'none', marginBottom:'5px'}}>🏆 Awarded the <b>Hyundai Hope Scholarship</b> (₹62k) for innovative sustainable mobility ideas.</li>
                <li style={{listStyleType:'none', marginBottom:'5px'}}>💻 Built complex projects like a <b>Peer-to-Peer VoIP system</b> and <b>AI-based Game logic</b> (Minimax Algorithm).</li>
              </ul>
              <br />
              
              I am always looking for new challenges in <b>Software Development</b> to apply my skills in solving real-world problems.
            </p>
          </div>

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