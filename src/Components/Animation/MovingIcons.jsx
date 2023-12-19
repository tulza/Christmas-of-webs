import React from "react";
import {
  CSSLogo,
  HTMLLogo,
  JSLogo,
  ReactLogo,
  TailwindLogo,
  Framer,
  FigmaLogo,
} from "../Images.jsx";
import LuminiateLogo from "../LuminiateLogo.jsx";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const MovingIcons = () => {
  const logos = [
    HTMLLogo,
    CSSLogo,
    JSLogo,
    ReactLogo,
    TailwindLogo,
    Framer,
    FigmaLogo,
  ];
  const ScrollSpeed = logos.length * 2;
  const calcDist = logos.length * 200;

  return (
    <div className="relative flex w-[1000px] flex-row overflow-hidden">
      <div className="scroll-fade-gradient absolute z-10 h-full w-full" />
      <motion.div
        className="flex w-max"
        animate={{
          x: [0, -calcDist],
          transition: {
            duration: ScrollSpeed,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {[...logos, ...logos].map((logo) => {
          return <LuminiateLogo logo={logo} key={uuidv4()} className="" />;
        })}
      </motion.div>
    </div>
  );
};

export default MovingIcons;
