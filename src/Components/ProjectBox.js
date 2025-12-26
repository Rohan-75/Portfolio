import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectName }) => {

  const desc = {
    FiveInARowDesc: "Built a strategy game using Python & Pygame with an adaptive AI. Implemented Minimax algorithm, Alpha-Beta Pruning, and Monte Carlo Tree Search (MCTS) to simulate intelligent gameplay scenarios.",
    FiveInARowGithub: "https://github.com/Rohan-75/Five-in-a-row",
    FiveInARowWebsite: "",

    P2PVoIPDesc: "Developed a serverless VoIP system using Python Sockets for real-time audio. Engineered low-latency UDP streaming and utilized multithreading to handle concurrent peer connections efficiently.",
    P2PVoIPGithub: "https://github.com/Rohan-75/Voice-over-IP",
    P2PVoIPWebsite: "",

    WeatherWiseDesc: "Created a responsive weather app using React 19 and Vite. Integrated OpenWeatherMap API to fetch and display real-time temperature, humidity, and wind speed with asynchronous data handling.",
    WeatherWiseGithub: "https://github.com/Rohan-75/Weather_App",
    WeatherWiseWebsite: "https://rohan-75.github.io/Weather_App/",

    SimonGameDesc: "Designed an interactive memory game using HTML, CSS, and jQuery. Features complex DOM manipulation for game states, dynamic sequence generation, and instant audio-visual feedback.",
    SimonGameGithub: "https://github.com/Rohan-75/Simon-Memory-game",
    SimonGameWebsite: "https://rohan-75.github.io/Simon-Memory-game/",

    QRGeneratorDesc:
      "Developed a web-based QR Code Generator allowing users to convert text or URLs into downloadable QR images. Implemented clean UI logic for instant generation and customization.",
    QRGeneratorGithub: "https://github.com/Rohan-75/QR_GENERATOR",
    // QRGeneratorWebsite: "https://your-demo-link.com",

    SelfHealingDesc: "Conducted R&D on asphalt pavement recovery during an internship at IIT Dharwad. Quantified a 37% strength improvement using statistical modeling and controlled loading cycle analysis.",
    SelfHealingGithub: "",
    SelfHealingWebsite: "",

    SmartPavementDesc: "Awarded the Hyundai Hope Scholarship for conceptualizing a 'Smart Electrical Pavement' system. Proposed a sustainable infrastructure model utilizing Inductive Power Transfer (IPT) to enable wireless charging for electric vehicles, aimed at reducing urban carbon emissions.",
    SmartPavementGithub: "",
    SmartPavementWebsite: "",
  };

  let showGithub = "";
  let showDemo = "";

  if (desc[projectName + "Github"] === "") {
    showGithub = "none";
  }
  if (desc[projectName + "Website"] === "") {
    showDemo = "none";
  }

  return (
    <div className='projectBox'>
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p style={{ lineHeight: '1.6', fontSize: '17px' }}>
            {desc[projectName + "Desc"]}
        </p>
        <br />

        <a style={{ display: showGithub }} href={desc[projectName + "Github"]} target="_blank" rel="noopener noreferrer">
          <button className='projectbtn'>
            <FaGithub /> Github
          </button>
        </a>

        <a style={{ display: showDemo }} href={desc[projectName + "Website"]} target="_blank" rel="noopener noreferrer">
          <button className='projectbtn'>
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;