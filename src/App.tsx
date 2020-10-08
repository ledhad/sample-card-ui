import React, { useState, useCallback } from 'react';
import './App.css';
import { Card } from './components/cards';
import ButtonStyle2 from './components/buttons/ButtonStyle2';
import { Fade } from './utils';
import { ReactComponent as LinkedinLogo } from './assets/logos/linkedin.svg';
import { ReactComponent as GitHubLogo } from './assets/logos/github.svg';
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
    let newSkill1 = skills.skill1;
    let newSkill2 = skills.skill2;
    [newSkill1, newSkill2] = findRandomSkill(
      [newSkill1, newSkill2],
      [skills.skill1, skills.skill2]
    );
    setskills({ skill1: newSkill1, skill2: newSkill2 });
    setShow(!show);
  }

  return (
    <div className="App">
      <span id="social-links">
        <a
          target="_blank"
          href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
        >
          <LinkedinLogo />
        </a>
        <a
          target="_blank"
          href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
        >
          <GitHubLogo />
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
        <ButtonStyle2>Others Skills</ButtonStyle2>
      </span>
    </div>
  );
}

export default App;
