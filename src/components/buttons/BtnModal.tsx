import React from 'react';

interface BtnModalProps {
  fill?: string;
  title: string;
}

function BtnModal({ fill = '#81FBF4', title }: BtnModalProps) {
  return (
    <>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id={`${title}-arrow-1`}>
          <rect
            x="0.707092"
            width="23"
            height="1"
            transform="rotate(45 0.707092 0)"
            fill={fill}
          />
        </g>
        <g id={`${title}-arrow-2`}>
          <rect
            y="16.2634"
            width="23"
            height="1"
            transform="rotate(-45 0 16.2634)"
            fill={fill}
          />
        </g>
      </svg>
    </>
  );
}

export default BtnModal;
