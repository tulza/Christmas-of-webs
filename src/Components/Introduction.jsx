import clsx from "clsx";
import React from "react";
import LuminiateLogo from "./LuminiateLogo";
import { motion } from "framer-motion";
import {
  CSSLogo,
  HTMLLogo,
  JSLogo,
  ReactLogo,
  TailwindLogo,
} from "./Images.jsx";
import { v4 as uuidv4 } from "uuid";
import AnimatedText from "./Animation/AnimatedText.jsx";

const defaultAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const Introduction = () => {
  const text = "Hello, I'm Tulza";
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-5xl">
        <AnimatedText
          text="Hello, I'm Tulza"
          variants={defaultAnimation}
          stagger={0.05}
        />
      </div>
      <div className="flex flex-row">
        <LuminiateLogo logo={CSSLogo} />
        <LuminiateLogo logo={HTMLLogo} />
        <LuminiateLogo logo={JSLogo} />
        <LuminiateLogo logo={ReactLogo} />
        <LuminiateLogo logo={TailwindLogo} />
      </div>
    </div>
  );
};

export default Introduction;
