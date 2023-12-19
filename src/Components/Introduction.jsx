import clsx from "clsx";
import React from "react";
import LuminiateLogo from "./LuminiateLogo";
import { delay, motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";
import AnimatedText from "./Animation/AnimatedText.jsx";
import MovingIcons from "./Animation/MovingIcons.jsx";

const defaultAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};
const Introduction = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="z-50 text-[100px] font-bold italic">
        {/* Hello, I'm Tulza 👋*/}
        <p className="flex">
          <AnimatedText
            text="Hello, I'm "
            variants={defaultAnimation}
            stagger={0.05}
          />
          <AnimatedText
            text="Ashton"
            applyEachChar="primary-gradient tracking-[7px] mr-[-7px]"
            variants={defaultAnimation}
            stagger={0.05}
            delay={0.5}
          />

          <motion.span
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { delay: 1 } }}
            whileHover={{
              rotate: [0, 30, 0],
              transition: {
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            👋
          </motion.span>
        </p>
        {/* Passionate in UX/UI, working with*/}
        <AnimatedText
          className="ml-[-20px] text-3xl font-normal"
          text="Passionate in UX/UI, working with"
          variants={defaultAnimation}
          stagger={0.05}
        />
      </div>
      <MovingIcons />
    </div>
  );
};

export default Introduction;
