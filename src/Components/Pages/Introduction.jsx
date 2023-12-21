import clsx from "clsx";
import React from "react";
import LuminiateLogo from "../LuminiateLogo.jsx";
import { delay, motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";
import AnimatedText from "../Animation/AnimatedText.jsx";
import MovingIcons from "../Animation/MovingIcons.jsx";

const defaultAnimation = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0 },
};
const Introduction = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
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
            applyEachChar="primary-gradient tracking-[10px] mr-[-10px]"
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
      <div
        className={clsx(
          "radical-limination-circle  absolute aspect-square w-[75%] rounded-full",
          "left-0 z-20 translate-x-[-50%]",
        )}
      />
      <div
        className={clsx(
          "radical-limination-circle  absolute aspect-square w-[1750px] rounded-full ",
          "right-[500px] top-0 z-20 translate-x-[50%] translate-y-[-50%]",
        )}
      />
    </div>
  );
};

export default Introduction;
