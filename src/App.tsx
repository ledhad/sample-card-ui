import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { Card } from './components/cards';
import ButtonStyle2 from './components/buttons/ButtonStyle2';
import { Fade } from './utils';
import gsap from 'gsap';
import { ReactComponent as LinkedinLogo } from './assets/logos/linkedin.svg';
import { ReactComponent as GitHubLogo } from './assets/logos/github.svg';
import { ReactComponent as NetlifyLogo } from './assets/logos/netlify.svg';
import debounce from 'lodash/debounce';
import { useMediaQuery } from 'react-responsive';
var nid = require('nid');

let possibleSkills = [
  'javascript',
  'cpp',
  'git',
  'html',
  'figma',
  'jss',
  'css',
  'typescript',
  'react',
  'gsap',
  'nodejs',
  'jquery',
];

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1025, minHeight: 601 });

  const [skills, setskills] = useState({ skill1: 'javascript', skill2: 'css' });
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    debounced();
  }
  useEffect(() => {
    setTimeout(() => {
      setskills({
        skill1: possibleSkills[count],
        skill2: possibleSkills[count + 1],
      });
      setShow(true);
    }, 499);
  }, [count]);

  useEffect(() => {
    if (count >= 12) {
      setCount(0);
    }
  }, [count]);

  const updateState = () => {
    setShow(!show);
    setCount((prev) => prev + 2);
  };

  let debounced = useCallback(
    debounce(updateState, 500, {
      leading: true,
      trailing: false,
    }),
    []
  );

  let aroundLinkedin = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="around-linkedin">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 0C1.34315 0 0 1.34315 0 3V39C0 40.6569 1.34315 42 3 42H39C40.6569 42 42 40.6569 42 39V3C42 1.34315 40.6569 0 39 0H3ZM3 1C1.89543 1 1 1.89543 1 3V39C1 40.1046 1.89543 41 3 41H39C40.1046 41 41 40.1046 41 39V3C41 1.89543 40.1046 1 39 1H3Z"
          fill="#006699"
        />
      </g>
    </svg>
  );

  let aroundGithub = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="around-github">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95432 31.0457 0 20 0C8.9543 0 0 8.95432 0 20C0 31.0457 8.9543 40 20 40ZM20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39Z"
          fill="#1B1F23"
        />
      </g>
    </svg>
  );
  return (
    <div className="App">
      <div className="app-wrapper">
        <span id="skills-seen">
          {count + 2} / {possibleSkills.length}
        </span>
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
            href="https://github.com/ledhad/sample-card-ui"
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

        <span
          style={{
            width: 120,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontFamily: 'roboto',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
          }}
        >
          hosted by
          <span id="logo-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.netlify.com/"
            >
              <NetlifyLogo />
            </a>
          </span>
        </span>
        <span style={{ color: 'grey' }}>
          {!isDesktop && 'Might not run smoothly on mobile devices'}
        </span>
        <span onClick={handleClick}>
          <ButtonStyle2>Other Skills</ButtonStyle2>
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
      </div>
    </div>
  );
}

export default App;
