import React, { useEffect, useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme } from 'theming';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import debounce from 'lodash/debounce';
import { theme as themDefault } from '../../theme';

gsap.registerPlugin(CustomEase);
interface ButtonStyle2Props {
  onClickButton?: () => void;
  children: React.ReactNode;
}
export default function ButtonStyle1({
  onClickButton,
  children,
}: ButtonStyle2Props) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [btnClicked, setbtnClicked] = useState(false);

  let debounced = useCallback(
    debounce(
      () => {
        gsap.to('#btn-info', {
          duration: 0.08,
          yoyo: true,
          repeat: 1,
          scale: 0.9,
          ease: CustomEase.create(
            'custom',
            'M0,0,C0.034,0.822,0.384,0.584,0.412,0.618,0.438,0.65,0.334,1,1,1'
          ),
        });
      },
      1000,
      {
        leading: true,
        trailing: false,
      }
    ),
    []
  );

  useEffect(() => {
    debounced();

    // return debounced.cancel();
  }, [btnClicked, debounced]);

  function handleClick() {
    setbtnClicked((prev) => !prev);

    if (onClickButton !== undefined) onClickButton();
  }

  return (
    <button className={classes.btn} id="btn-info" onClick={() => handleClick()}>
      <span className={classes.btnStyle}>{children}</span>
    </button>
  );
}

// apparently this is better for performance https://tobiasahlin.com/blog/how-to-animate-box-shadow/
const useStyles = createUseStyles({
  btnStyle: {
    position: 'relative',
    display: 'inline-flex',
    padding: '8px 22px',
    borderRadius: 50,
    boxShadow:
      '0px 3px 6px 1px rgba(0, 0, 0, 0.08), 0px 5px 20px rgba(0, 0, 0, 0.15)',
    background: ({ theme }) => theme.color.gold,

    transition: 'all 0.5s',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justiyItems: 'center',
    position: 'abolute',
    height: '50%',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color: ({ theme }) => theme.color.white,
    padding: '22px 17px',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    '&:hover': {
      '& > span': {
        background: ({ theme }) => theme.color.marinBlue,
        boxShadow:
          '0px 6px 10px 2px rgba(0, 0, 0, 0.15), 0px 5px 20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
});
