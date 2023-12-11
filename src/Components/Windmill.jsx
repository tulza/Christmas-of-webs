import clsx from "clsx";
import React from "react";

const Windmill = ({ size }) => {
  return (
    <div
      className={clsx(
        "relative grid aspect-square w-20 grid-cols-2",
        `scale-[${size}] rotate-full`,
      )}
    >
      <div className="overflow-hidden">
        <div className="h-full w-full translate-y-[50%] rounded-full bg-blue-500" />
      </div>
      <div className="overflow-hidden">
        <div className="h-full w-full  translate-x-[-50%] rounded-full bg-yellow-200" />
      </div>
      <div className="overflow-hidden">
        <div className="h-full w-full translate-x-[50%] rounded-full bg-yellow-200" />
      </div>
      <div className="overflow-hidden">
        <div className="h-full w-full translate-y-[-50%] rounded-full bg-blue-500" />
      </div>
    </div>
  );
};

export default Windmill;
