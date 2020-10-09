import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { createUseStyles } from 'react-jss';
import { useTheme } from 'theming';
import CustomEase from 'gsap/CustomEase';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ButtonStyle1 from '../buttons/ButtonStyle1';
import { ButtonModal } from '../buttons/';

import getCardBySkill from './getLogo';
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(CSSRulePlugin);

interface Card1Props {
  title: string;
  content: string;
  expandedContent: string;
}

function Card1({ title, content, expandedContent }: Card1Props) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [buttonModalAnimation, setbuttonModalAnimation] = useState(false);
  const [toggle, settoggle] = useState(false);
  let skillLogo = getCardBySkill(title as string);

  let titleContent = title;
  if (title === 'Node.js') {
    title = 'nodejs';
  }
  if (title === 'C++') {
    title = 'cpp';
  }

  const updateBtnModalAnimation = () => {
    setbuttonModalAnimation(!buttonModalAnimation);
    // setbuttonModalAnimation((prev) => !prev);
  };
  const [tl] = useState(
    gsap.timeline({
      onComplete: () => updateBtnModalAnimation(),
      paused: true,
    })
  );
  const toggleTimeline = () => {
    settoggle(!toggle);
  };

  let onClickButton = () => {
    toggleTimeline();
  };
  const expandedContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sizeContainer;
    if (expandedContentRef.current) {
      let rect = expandedContentRef.current.clientHeight;
      let margin = 20;
      let sizeHeader = 53;
      sizeContainer = rect + sizeHeader + margin;
    }

    tl.to(`#${title}-expandedContent`, {
      opacity: 0,
      y: 65,
      duration: 0,
    });
    tl.to(`#${title}-spanForAnimationLeft`, {
      rotation: 0.01, // to make it smooth
      clipPath: 'circle(200% at -10% -10%)',
      duration: 0.7,
      ease: 'power2.in',
    });
    tl.to(`#${title}-left`, {
      rotation: 0.01, // to make it smooth
      borderWidth: 0,
      duration: 0,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.066,0.318 0.367,0.654 0.496,0.775 0.54,0.816 0.78,1 1,1'
      ),
    });

    tl.to(`#${title}-topSVG`, {
      rotation: 0.01, // to make it smooth
      duration: 0,
      display: 'none',
    });
    tl.to(`#${title}-bottomSVG`, {
      rotation: 0.01, // to make it smooth
      duration: 0,
      display: 'none',
    });
    tl.to(`#${title}-spanForAnimationLeft`, {
      rotation: 0.01, // to make it smooth
      left: -95,
      duration: 0.5,
      ease: 'power2.in',
    });
    tl.to(
      `#${title}-logo`,
      {
        rotation: 0.01, // to make it smooth
        x: -100,
        duration: 0.1,
        ease: 'power2.in',
      },
      '<'
    );
    tl.to(
      `#${title}-left`,
      {
        rotation: 0.01, // to make it smooth
        width: 0,
        minWidth: 0,
        duration: 0.6,
        ease: 'power2.in',
      },
      '<'
    );
    tl.to(
      `#${title}-left`,
      {
        rotation: 0.01, // to make it smooth
        height: '0%',
        duration: 0.1,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.066,0.318 0.367,0.654 0.496,0.775 0.54,0.816 0.78,1 1,1'
        ),
      },
      '<'
    );
    tl.to(
      [`#${title}-content`, `#${title}-btnStyle`, `#${title}`],
      {
        rotation: 0.01, // to make it smooth
        x: -300,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '<+0.4'
    );
    tl.to(`#${title}-wrapper`, {
      duration: 0.8,
      height: sizeContainer,
      flexDirection: 'column',
      rotation: 0.01, // to make it smooth
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.066,0.318 0.367,0.654 0.496,0.775 0.54,0.816 0.78,1 1,1'
      ),
    });
    tl.to(
      `#${title}-spanForAnimationTop`,
      {
        rotation: 0.01, // to make it smooth
        top: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '<+0.1'
    );
    tl.to(
      `#${title}`,
      {
        rotation: 0.01, // to make it smooth
        // paddingTop: rightTextMarginTop,
        zIndex: 5,
        duration: 1,
        ease: 'power2.out',
      },
      '<-1'
    );
    tl.to(
      `#${title}-content`,
      {
        rotation: 0.01, // to make it smooth
        paddingTop: 10,
        duration: 1,
        ease: 'power4.out',
      },
      '>'
    );
    tl.to(
      [`#${title}`],
      {
        opacity: 0,
        y: -40,
        ease: 'power2.in',
      },
      '<'
    );
    tl.to(
      [`#${title}-expandedContent`],
      {
        opacity: 1,
        x: 300,
        duration: 0.5,
        ease: 'power2.in',
      },
      '<+0.5'
    );
    tl.to(
      [`#${title}`],
      {
        x: 0,
        duration: 0,
        ease: 'power2.in',
      },
      '<'
    );
    tl.to(
      [`#${title}`],
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power1.out',
      },
      '>'
    );
    tl.fromTo(
      [`#${title}-arrow-2`, `#${title}-arrow-1`],
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2',
      },
      '>-0.2'
    );
    tl.fromTo(
      `#${title}-arrow-1`,
      {
        rotation: -45,
        transformOrigin: '50% 50%',
      },
      {
        rotation: 180,
        transformOrigin: '50% 50%',
        duration: 0.7,
        ease: 'power2',
      },
      '>'
    );

    tl.fromTo(
      `#${title}-arrow-2`,
      {
        rotation: 45,
        transformOrigin: '50% 50%',
      },
      {
        rotation: 180,
        transformOrigin: '50% 50%',
        duration: 0.7,
        ease: 'power2',
      },
      '<'
    );
    tl.timeScale(1.5);
    tl.reverse();
    return () => {
      tl.kill();
    };
    // eslint-disable-next-line
  }, [tl]);

  useEffect(() => {
    tl.reversed(!toggle);
  }, [toggle, tl]);

  useEffect(() => {
    gsap.to(`#${title}-logo`, {
      duration: 0.8 + Math.floor(Math.random()) / 10,
      y: -10,
      repeat: -1,
      delay: -Math.floor(Math.random() * 10) / 10,
      yoyo: true,
      rotation: 0.01, // to make it smooth
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.066,0.318 0.367,0.654 0.496,0.775 0.54,0.816 0.78,1 1,1'
      ),
    });
  }, [title]);

  return (
    <>
      <div className={classes.wrapper} id={`${title}-wrapper`}>
        <div
          className={classes.spanExpandedContent}
          id={`${title}-expandedContent`}
          ref={expandedContentRef}
        >
          <p>{expandedContent}</p>
        </div>
        <span
          className={classes.spanForAnimationLeft}
          id={`${title}-spanForAnimationLeft`}
        ></span>
        <span
          className={classes.spanForAnimationTop}
          id={`${title}-spanForAnimationTop`}
        >
          <span>{skillLogo}</span>
          <span onClick={onClickButton}>
            <ButtonModal title={title} />
          </span>
        </span>

        <section className={classes.right} id={`${title}-right`}>
          <h5 className={classes.title} id={`${title}`}>
            {titleContent}
          </h5>
          <p className={classes.content} id={`${title}-content`}>
            {content}
          </p>
          <span id={`${title}-btnStyle`}>
            <ButtonStyle1 onClickButton={onClickButton} />
          </span>
        </section>
        <section className={classes.left} id={`${title}-left`}>
          <span className={classes.topSVG} id={`${title}-topSVG`}>
            {topSVG}
          </span>
          <div className={classes.logo} id={`${title}-logo`}>
            {skillLogo}
          </div>
          <span className={classes.bottomSVG} id={`${title}-bottomSVG`}>
            {bottomSVG}
          </span>
        </section>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  spanExpandedContent: `
  position: absolute;
  font-family: 'Phetsarath-Regular',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height:18px;
  color : #7B7676;
  text-align: left;
  margin-right: 13px;
  margin-left: 16px;
  margin-top: 0px;
  opacity:0;
  max-width:240px;
  width: 240px;
  left : -300px;
  `,
  spanForAnimationLeft: {
    height: 160,
    width: 95,
    minWidth: 95,
    backgroundColor: ({ theme }) => theme.color.crazyGreen,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    clipPath: 'circle(10% at -10% -10%)',
  },
  spanForAnimationTop: {
    height: 53,
    width: 280,
    minWidth: 280,
    backgroundColor: ({ theme }) => theme.color.crazyGreen,
    position: 'absolute',
    top: -53,
    left: 0,
    zIndex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& span': {
      marginTop: 10,
      marginLeft: 10,
    },
    '& :nth-child(2)': {
      marginTop: 10,
      marginRight: 10,
    },
  },
  wrapper: {
    height: 160,
    width: 280,
    margin: 21,
    display: 'flex',
    flexDirection: 'row',
    boxShadow:
      '0px 7px 12px 2px rgba(0, 0, 0, 0.08), 0px 5px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 7,
    position: 'relative',
    backgroundColor: ({ theme }) => theme.color.white,
  },
  title: `
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 18px;
  margin-top: 18px;
  opacity:1;
  minHeight:24px;
 `,
  content: `
  font-family: 'Phetsarath-Regular',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color : #7B7676;
   line-height:18px;
  text-align: center;
  margin-right: 13px;
  margin-left:5px;
  maxWidth: 169px;
  `,
  right: {
    order: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  left: {
    width: 92,
    minWidth: 92,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    borderRight: '1px solid #E44D26',
  },
  logo: {
    position: 'absolute',
    top: 63,
    left: 28,
    width: 36,
    height: 36,
  },
  bottomSVG: {
    position: 'relative',
    height: 76,
  },
  topSVG: {
    position: 'relative',
    height: 84,
  },
});

let bottomSVG = (
  <svg
    width="92"
    height="76"
    viewBox="0 0 92 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M92 0V76H7C3.13401 76 0 72.866 0 69V0H27.3801C29.1405 4.56448 36.808 8 46 8C55.192 8 62.8595 4.56448 64.6199 0H92Z"
      fill="#EBEBEB"
    />
  </svg>
);

let topSVG = (
  <svg
    width="92"
    height="84"
    viewBox="0 0 92 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M92 84V0H7C3.13401 0 0 3.134 0 7V84H27.3801C27.1308 83.3538 27 82.6849 27 82C27 76.4771 35.5066 72 46 72C56.4934 72 65 76.4771 65 82C65 82.6849 64.8692 83.3538 64.6199 84H92Z"
      fill="#EBEBEB"
    />
  </svg>
);

export default Card1;
