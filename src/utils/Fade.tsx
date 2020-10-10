import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
var nid = require('nid');

interface FadeProps {
  show: boolean;
  children: React.ReactNode;
}
const Fade = ({ show, children }: FadeProps) => {
  const [render, setRender] = useState(show);
  const [id] = useState(nid({ alphabet: 'abscdefghijklmnopqrstuvwxyz' }));

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  useEffect(() => {
    if (show) {
      gsap.fromTo(
        `#${id}`,
        {
          opacity: 0,
          x: 400,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.fromTo(
        `#${id}`,
        {
          opacity: 1,
          x: 0,
        },
        {
          x: -400,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    }
  }, [show, id]);

  return ((render && (
    <div onAnimationEnd={onAnimationEnd} id={id}>
      {children}
    </div>
  )) as unknown) as JSX.Element;
};

export default Fade;
