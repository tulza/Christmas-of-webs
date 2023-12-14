import { clsx } from "clsx";
import React, { useState } from "react";

export const Button = ({ label }) => {
  return (
    <button className="gradient-boarder text-text p-8 text-2xl">{label}</button>
  );
};

export const ToggleDarkmode = () => {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn(~on);
  };

  return (
    <div
      className="relative flex h-7 w-[3.25rem] cursor-pointer items-center justify-center rounded-full  outline outline-2 outline-white"
      onClick={() => {
        handleToggle();
      }}
    >
      <div
        className={clsx(
          "relative flex h-6 w-12 items-center rounded-full bg-white outline outline-black",
          on ? "outline-red-500" : "outline-green-500",
        )}
      >
        <div
          className={clsx(
            "absolute m-1 h-4 w-4 rounded-full bg-black",
            on ? "left-0" : "left-[calc(100%-1.5rem)]",
          )}
        />
      </div>
    </div>
  );
};

const NavDesktop = ({ setPage }) => {
  return (
    <div className="absolute flex h-[100px] w-full items-center justify-between gap-4 p-20">
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
