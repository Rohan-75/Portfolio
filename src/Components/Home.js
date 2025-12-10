import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Vivek Kumar</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
  <div className='AboutText'>
    <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
    <p>
      I enjoy building meaningful projects and transforming ideas into functional,
      user-centric products. I aim to work on challenging problems that help me grow
      as a developer and allow me to create something impactful.<br /><br />

      I am fluent in <b>C++</b> and <b>Data Structures & Algorithms</b>.
      I also work with <b>Python</b> and <b>JavaScript</b>, and have experience in full-stack 
      development using <b>React</b>, <b>Node.js</b>, <b>Express.js</b>, and database tools. 
      Alongside development, I enjoy solving algorithmic problems and improving my problem-solving skills.<br /><br />

      I have a strong academic and competitive background — I qualified <b>PRMO</b> and <b>RMO</b>,
      securing <b>7th rank in South Bihar</b>. I was also awarded the prestigious 
      <b>Hyundai Hope Scholarship</b> in 2025 for innovative engineering ideas.<br /><br />

      I plan to keep expanding my technical skill set and explore more advanced technologies
      in software and web development.<br /><br />

      Also, I love playing <b>cricket</b>
    </p>
  </div>
  <Tilt>
    <img className='Avatar' src={Avatar} alt="" />
  </Tilt>
</div>

    </div>
  )
}

export default Home