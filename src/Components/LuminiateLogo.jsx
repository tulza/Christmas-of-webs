import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const LuminiateLogo = ({ logo, className }) => {
  console.log(logo);
  return (
    <div
      className={clsx(
        "radical-limination-circle flex aspect-square w-[200px] items-center justify-center",
        className,
      )}
    >
      <motion.img
        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
        src={logo}
        alt=""
      />
    </div>
  );
};

export default LuminiateLogo;
