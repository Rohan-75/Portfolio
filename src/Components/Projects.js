import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        
        {/* --- SOFTWARE PROJECTS --- */}
        <ProjectBox projectName="FiveInARow" />
        <ProjectBox projectName="P2PVoIP" />
        <ProjectBox projectName="WeatherWise" />
        <ProjectBox projectName="SimonGame" />

        {/* --- CORE CIVIL PROJECTS --- */}
        <ProjectBox projectName="SelfHealing" />
        <ProjectBox projectName="SmartPavement" />

      </div>
    </div>
  )
}

export default Projects