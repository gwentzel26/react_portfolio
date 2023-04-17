
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Typewriter({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's Gavin",
      "I'm a Full Stack Developer",
      "<I love to create incredible UI />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
  
  <div>
        <h2>
            {text}
        </h2>
        <Cursor cursorColor="#F7AB0A"/>
  </div>
   )
}
