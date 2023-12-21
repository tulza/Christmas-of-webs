import React, { useState } from "react";
import { BoxLink, LinkLogo } from "../Images.jsx";
import { motion } from "framer-motion";

const variants = {
  hover: { width: 50 },
};
const Link = {
  hover: { opacity: 1 },
};

const Box = () => {
  return (
    <>
      <div className="absolute flex h-[10rem] w-[10rem] items-center justify-center overflow-hidden rounded-xl bg-[#141823] text-white">
        <motion.div
          className="relative h-[140px] w-[140px] cursor-pointer rounded-md bg-white"
          whileHover="hover"
        >
          <motion.img
            src={BoxLink}
            className="absolute bottom-0 right-0 w-0"
            variants={variants}
          />
          <motion.img
            src={LinkLogo}
            className="absolute bottom-0 right-0 w-0 scale-50 opacity-0"
            variants={Link}
            initial={{ width: 40 }}
            transition={{ opacity: { duration: 0.5, delay: 0.2 } }}
          />
        </motion.div>
        <div className="shadow-bento pointer-events-none absolute h-full w-full" />
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <Box />
    </div>
  );
};

export default Projects;
