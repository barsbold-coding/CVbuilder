import React from "react";

import style from './style.module.css';

type Paragraph = {
  children: string;
  center?: boolean;
  size: 'small' | 'normal';
  color: 'white' | 'primary';
}

function Paragraph({ children, center, size, color }: Paragraph) {
  return (
    <div className={`${style.paragraph} ${style[size]} ${color} ${center && style.center}`}>
      {children}
    </div>
  )
}

export default Paragraph;
