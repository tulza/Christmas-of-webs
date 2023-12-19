import { clsx } from "clsx";
import React, { useState } from "react";

export const Button = ({ label }) => {
  return (
    <button className="gradient-boarder p-8 text-2xl text-text">{label}</button>
  );
};

const NavDesktop = ({}) => {
  return (
    <div className="flex h-[100px] w-full items-center justify-between gap-4 p-20">
      <div></div>
      <div className="flex flex-row place-items-center gap-20">
        <div className="px-[-10px]">
          <Button label="About me" />
          <Button label="Projects" />
          <Button label="Education" />
          <Button label="Portfolio" />
        </div>
        <div className=" flex flex-col gap-[7px]">
          <div className="h-[6px] w-[70px] bg-white" />
          <div className="h-[6px] w-[70px] bg-white" />
          <div className="h-[6px] w-[70px] bg-white" />
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
