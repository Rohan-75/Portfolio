import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
<ProjectBox projectPhoto={WigglesImage} projectName="FiveInARow" />
<ProjectBox projectPhoto={NewsletterImage} projectName="WebGames" />
<ProjectBox projectPhoto={RogfreeImage} projectName="P2PVoIP" />
<ProjectBox projectPhoto={TindogImage} projectName="SelfHealing" />

      </div>

    </div>
  )
}

export default Projects