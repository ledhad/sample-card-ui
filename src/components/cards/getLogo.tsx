import React from 'react';
import { ReactComponent as CSS } from '../../assets/logos/css.svg';
import { ReactComponent as HTML } from '../../assets/logos/html.svg';
import { ReactComponent as GIT } from '../../assets/logos/git.svg';
import { ReactComponent as FIGMA } from '../../assets/logos/figma.svg';
import { ReactComponent as JQUERY } from '../../assets/logos/jquery.svg';
import { ReactComponent as CPP } from '../../assets/logos/cpp.svg';
import { ReactComponent as JS } from '../../assets/logos/javascript.svg';
import { ReactComponent as REACT } from '../../assets/logos/react.svg';
import { ReactComponent as TS } from '../../assets/logos/typescript.svg';
import { ReactComponent as GSAP } from '../../assets/logos/gsap.svg';
import { ReactComponent as NODE } from '../../assets/logos/nodejs.svg';
import { ReactComponent as JSS } from '../../assets/logos/jss.svg';
// eslint-disable-next-line
import { ReactComponent as SASS } from '../../assets/logos/sass.svg';
// eslint-disable-next-line
import { ReactComponent as FMOTION } from '../../assets/logos/framer-motion.svg';

const getCardBySkill = (skillName: string) => {
  if (skillName.toLowerCase() === 'css') return <CSS />;
  if (skillName.toLowerCase() === 'html') return <HTML />;
  if (skillName.toLowerCase() === 'figma') return <FIGMA />;
  if (skillName.toLowerCase() === 'jquery') return <JQUERY />;
  if (skillName.toLowerCase() === 'git') return <GIT />;
  if (skillName.toLowerCase() === 'c++') return <CPP />;
  if (skillName.toLowerCase() === 'javascript') return <JS />;
  if (skillName.toLowerCase() === 'react') return <REACT />;
  if (skillName.toLowerCase() === 'typescript') return <TS />;
  if (skillName.toLowerCase() === 'gsap') return <GSAP />;
  if (skillName.toLowerCase() === 'node.js') return <NODE />;
  if (skillName.toLowerCase() === 'jss') return <JSS />;
};
export default getCardBySkill;
