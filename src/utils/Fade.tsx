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
  console.log(id);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  useEffect(() => {
    gsap.fromTo(
      `#${id}`,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
  }, [show, id]);

  return ((render && (
    <div onAnimationEnd={onAnimationEnd} id={id}>
      {children}
    </div>
  )) as unknown) as JSX.Element;
};

export default Fade;
