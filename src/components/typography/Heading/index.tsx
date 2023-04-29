import React from 'react';

import style from './style.module.css';

type HeadingProps = {
  children: string;
  size: 'huge' | 'big' | 'normal';
  color: 'primary' | 'secondary' | 'background' | 'white';
  type: 'logo' | 'text'
}

function Heading({ children, size, color, type }: HeadingProps) {
  return (
    <span className={`${style[type]} ${style[size]} ${color}`}>
      {children}
    </span>
  )
}

export default Heading;
