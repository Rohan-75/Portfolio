import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const desc = {
    // -------------------- YOUR 4 RESUME PROJECTS --------------------

    FiveInARowDesc:
      "A Python & Pygame-based AI strategy game implementing Minimax, Alpha-Beta Pruning, and Monte Carlo Tree Search (MCTS) with UCT. Supports adaptive AI and customizable board sizes.",
    FiveInARowGithub: "https://dummy-link-1.com",
    FiveInARowWebsite: "https://dummy-link-1.com",

    WebGamesDesc:
      "Two interactive web games — Drum Kit (event-driven sound & animation) and Simon Memory Game (pattern generation, user validation, level progression).",
    WebGamesGithub: "https://dummy-link-2.com",
    WebGamesWebsite: "https://dummy-link-2.com",

    P2PVoIPDesc:
      "A decentralized peer-to-peer VoIP system enabling real-time audio calls without a central server. Includes UDP low-latency streaming, multithreading & a custom peer discovery tracker.",
    P2PVoIPGithub: "https://dummy-link-3.com",
    P2PVoIPWebsite: "https://dummy-link-3.com",

    SelfHealingDesc:
      "A research-based analysis tool developed during internship to evaluate self-healing materials using structured testing, controlled loading cycles, formula-driven strength evaluation and recovery analysis.",
    SelfHealingGithub: "", // No GitHub → button auto hides
    SelfHealingWebsite: "https://dummy-link-4.com",

    // ---------------------------------------------------------------
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a style={{ display: show }} href={desc[projectName + "Github"]} target="_blank">
          <button className='projectbtn'>
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className='projectbtn'>
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
