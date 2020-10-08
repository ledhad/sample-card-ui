import React, { useState, useCallback } from 'react';
import './App.css';
import { Card } from './components/cards';
import ButtonStyle2 from './components/buttons/ButtonStyle2';
import { Fade } from './utils';
import gsap from 'gsap';
import { ReactComponent as LinkedinLogo } from './assets/logos/linkedin.svg';
import { ReactComponent as GitHubLogo } from './assets/logos/github.svg';
import debounce from 'lodash/debounce';
var nid = require('nid');

function App() {
  const [skills, setskills] = useState({ skill1: 'css', skill2: 'html' });
  const [show, setShow] = useState(true);
  let possibleSkills = [
    'css',
    'html',
    'javascript',
    'cpp',
    'git',
    'figma',
    'jss',
    'typescript',
    'react',
    'gsap',
    'nodejs',
    'jquery',
  ];
  let findRandomSkill = useCallback(
    (skillToUpdate: Array<string>, actualSkills: Array<string>) => {
      let temp = '';
      let newSkills: Array<string> = skillToUpdate.map((element, index) => {
        while (
          element === actualSkills[0] ||
          element === actualSkills[1] ||
          element === skillToUpdate[(index + 1) % 2] ||
          element === temp
        ) {
          let n = Math.floor(Math.random() * possibleSkills.length);
          element = possibleSkills[n];
        }
        temp = element;
        return element;
      });
      return newSkills;
    },
    [possibleSkills]
  );
  function handleClick() {
    debounced();
  }

  let debounced = useCallback(
    debounce(
      () => {
        let newSkill1 = skills.skill1;
        let newSkill2 = skills.skill2;
        [newSkill1, newSkill2] = findRandomSkill(
          [newSkill1, newSkill2],
          [skills.skill1, skills.skill2]
        );
        setskills({ skill1: newSkill1, skill2: newSkill2 });
        setShow(!show);
      },
      1000,
      {
        leading: true,
        trailing: false,
      }
    ),
    []
  );

  let aroundLinkedin = (
    <g id="around-linkedin">
      <svg
        width="40"
        height="40"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 0C1.34315 0 0 1.34315 0 3V39C0 40.6569 1.34315 42 3 42H39C40.6569 42 42 40.6569 42 39V3C42 1.34315 40.6569 0 39 0H3ZM3 1C1.89543 1 1 1.89543 1 3V39C1 40.1046 1.89543 41 3 41H39C40.1046 41 41 40.1046 41 39V3C41 1.89543 40.1046 1 39 1H3Z"
          fill="#006699"
        />
      </svg>
    </g>
  );

  let aroundGithub = (
    <g id="around-github">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95432 31.0457 0 20 0C8.9543 0 0 8.95432 0 20C0 31.0457 8.9543 40 20 40ZM20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39Z"
          fill="#1B1F23"
        />
      </svg>
    </g>
  );
  return (
    <div className="App">
      <span id="social-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/hadledanseur/"
        >
          <span
            id="logo-wrapper"
            onMouseEnter={() =>
              gsap.to('#around-linkedin', { duration: 0.3, opacity: 1 })
            }
            onMouseLeave={() =>
              gsap.to('#around-linkedin', { duration: 0.3, opacity: 0 })
            }
          >
            <LinkedinLogo />
            <span id="around-linkedin-wrapper">{aroundLinkedin}</span>
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ledhad"
        >
          <span
            id="logo-wrapper"
            onMouseEnter={() =>
              gsap.to('#around-github', { duration: 0.3, opacity: 1 })
            }
            onMouseLeave={() =>
              gsap.to('#around-github', { duration: 0.3, opacity: 0 })
            }
          >
            <GitHubLogo />
            <span id="around-github-wrapper">{aroundGithub}</span>
          </span>
        </a>
      </span>

      <Fade show={show}>
        {possibleSkills.map((skill) => {
          return (
            (skills.skill1 === skill || skills.skill2 === skill) && (
              <Card skill={skill} key={nid(10).toString()} />
            )
          );
        })}
      </Fade>

      <span onClick={handleClick}>
        <ButtonStyle2>Other Skills</ButtonStyle2>
      </span>
    </div>
  );
}

export default App;
