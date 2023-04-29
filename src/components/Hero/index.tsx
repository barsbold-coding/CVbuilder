import React from "react";
import Spacing from "../spacing";
import {Heading, Paragraph} from "../typography";

import style from './style.module.css';

type Hero = {
  text: string;
}

function Hero({ text }: Hero) {
  return <div className={style.hero}>
    <Heading type="text" size="huge" color="white">
      {text}
    </Heading>
    <Spacing type="vertical" />
    <Paragraph size="normal" color="white" center>
      Modern and interactive CV builder.
    </Paragraph>
  </div>
}

export default Hero;
