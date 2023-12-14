import clsx from "clsx";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex h-[100vh] w-full place-items-center justify-center">
      <div className="flex flex-col">
        <span className="text-5xl">Hello, I’m Tulza 👋</span>
        <span className="text-2xl">Passionate in UX / UI, working with</span>
      </div>
      {/* Page lumination */}
      <div
        className={clsx(
          "radical-limination-circle  absolute -z-10 aspect-square w-[75%] rounded-full bg-white",
          "left-0 translate-x-[-50%]",
        )}
      />
      <div
        className={clsx(
          "radical-limination-circle  absolute -z-10 aspect-square w-[1750px] rounded-full bg-white",
          "right-[500px] top-0 translate-x-[50%] translate-y-[-50%]",
        )}
      />
    </div>
  );
};

export default Introduction;
