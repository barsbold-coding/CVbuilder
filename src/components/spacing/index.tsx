import React from 'react';

import style from './style.module.css';

type Spacing = {
  type: 'vertical' | 'horizontal';
}

function Spacing({ type }: Spacing) {
  return <div className={style[type]} />
}

export default Spacing;
