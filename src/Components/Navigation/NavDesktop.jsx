import { clsx } from "clsx";
import React, { useState } from "react";

export const Button = ({ label }) => {
  return (
    <button className="hover: aspect-[2] w-[100px] bg-white hover:bg-DarkPurple">
      {label}
    </button>
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
    <div className="flex h-[100px] items-center justify-between gap-4 p-6 outline outline-white ">
      <div className="flex gap-4">
        <Button />
        <Button />
        <Button />
      </div>
      <ToggleDarkmode />
    </div>
  );
};

export default NavDesktop;
