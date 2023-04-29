import React, {useState} from 'react';
import { Heading } from '../typography';

type LogoPropsType = {
  color: 'primary' | 'secondary' | 'white';
}

function Logo ({ color }: LogoPropsType) {
  return (
    <div className="color-primary">
      <Heading size='big' color={color} type='logo'>
        Dev Hackaton
      </Heading>
    </div>
  )
}

export default Logo;
