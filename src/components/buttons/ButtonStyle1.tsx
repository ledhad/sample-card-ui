import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme } from 'theming';
import gsap from 'gsap';
var nid = require('nid');

interface btnArrowCircleProps {
  id: string;
}
let ButtonArrowCircle = ({ id }: btnArrowCircleProps) => {
  return (
    <svg
      width="35"
      height="23"
      viewBox="0 0 35 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id={`btn-circle-${id}`}>
        <path
          d="M22.5 11.5C22.5 17.5751 17.5751 22.5 11.5 22.5C5.42487 22.5 0.5 17.5751 0.5 11.5C0.5 5.42487 5.42487 0.5 11.5 0.5C17.5751 0.5 22.5 5.42487 22.5 11.5Z"
          stroke="black"
          strokeOpacity="0.5"
        />
      </g>
      <g id={`btn-arrow-${id}`}>
        <path
          d="M34.3536 12.3536C34.5488 12.1583 34.5488 11.8417 34.3536 11.6464L31.1716 8.46447C30.9763 8.2692 30.6597 8.2692 30.4645 8.46447C30.2692 8.65973 30.2692 8.97631 30.4645 9.17157L33.2929 12L30.4645 14.8284C30.2692 15.0237 30.2692 15.3403 30.4645 15.5355C30.6597 15.7308 30.9763 15.7308 31.1716 15.5355L34.3536 12.3536ZM11 12.5H34V11.5H11V12.5Z"
          fill="#49C5B6"
        />
      </g>
    </svg>
  );
};

interface ButtonStyle1Props {
  onClickButton: () => void;
}
export default function ButtonStyle1({ onClickButton }: ButtonStyle1Props) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isHovered, setisHovered] = useState(false);
  const [btnClicked, setbtnClicked] = useState(false);
  const [idBtn] = useState(nid(10));

  useEffect(() => {
    gsap.to(`#btn-info-${idBtn}`, {
      scale: 0.9,
      transformOrigin: '50% 50%',
    });
  }, [idBtn]);

  useEffect(() => {
    //add trigger to launch that
    let xTranslate = isHovered === true ? -5 : 0;
    let scaleRatio = isHovered === true ? 1.1 : 1;
    if (!btnClicked) {
      gsap.to(`#btn-arrow-${idBtn}`, {
        duration: 0.5,
        x: xTranslate,
        transformOrigin: '50% 50%',
        rotation: 0.01, // to make it smooth
        ease: 'power1.out',
      });
      gsap.to(`#btn-circle-${idBtn}`, {
        duration: 0.5,
        scale: scaleRatio,
        transformOrigin: '50% 50%',
        rotation: 0.01, // to make it smooth
        ease: 'power1.out',
      });
    }
  }, [isHovered, btnClicked, idBtn]);

  useEffect(() => {
    //add trigger to launch that
    let xTranslate = btnClicked === true ? 150 : 0;

    gsap.to(`#btn-arrow-${idBtn}`, {
      duration: 1,
      x: xTranslate,
      repeat: 1,
      yoyo: true,
      transformOrigin: '50% 50%',
      rotation: 0.01, // to make it smooth
      ease: 'power1.out',
    });
    gsap.to(`#btn-circle-${idBtn}`, {
      duration: 0.5,
      scale: 1,
      transformOrigin: '50% 50%',
      rotation: 0.01, // to make it smooth
      ease: 'power1.out',
    });
    gsap.to(`#btn-info-${idBtn}`, {
      pointerEvents: 'auto',
      delay: 0,
    });
  }, [btnClicked, idBtn]);

  function handleClick() {
    setbtnClicked((prev) => !prev);
    onClickButton();
  }
  return (
    <>
      <button
        className={classes.btn}
        id={`btn-info-${idBtn}`}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        onClick={() => handleClick()}
      >
        <span className={classes.btnSVG}>
          <ButtonArrowCircle id={idBtn} />
        </span>
        <span className={classes.span}>More Info</span>
      </button>
    </>
  );
}

const useStyles = createUseStyles({
  btnSVG: {
    scale: 0.8,
    overflow: 'visible',
    '& > svg ': {
      overflow: 'visible',
    },
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color: ({ theme }) => theme.color.crazyGreen,
    padding: '7px 5px',
    marginTop: 5,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    overflow: 'visible',
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
  span: `
  position: relative;
  margin-left: 9px;
  `,
});
