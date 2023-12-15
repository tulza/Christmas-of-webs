import clsx from "clsx";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const AnimatedText = ({ text }) => {
  let delay = 0;
  return (
    <>
      {[...text].map((char) => {
        delay += 50;
        return (
          <span className="" style={{ transform: "translateY(0%)" }} key={`${uuidv4()}`}>
            {char}
          </span>
        );
      })}
    </>
  );
};

export default AnimatedText;
