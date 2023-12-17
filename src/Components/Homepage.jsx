import React, { useState, useEffect } from "react";
import NavDesktop from "./Navigation/NavDesktop";
import clsx from "clsx";
import Introduction from "./Introduction";

const Homepage = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log("reloaded");
  });

  return (
    <>
      <div
        className={clsx(
          "relative flex h-full w-full flex-col overflow-x-hidden",
        )}
      >
        <NavDesktop />
        <Introduction />

        <div
          className={clsx(
            "radical-limination-circle  absolute -z-10 aspect-square w-[75%] rounded-full",
            "left-0 translate-x-[-50%]",
          )}
        />
        <div
          className={clsx(
            "radical-limination-circle  absolute -z-10 aspect-square w-[1750px] rounded-full ",
            "right-[500px] top-0 translate-x-[50%] translate-y-[-50%]",
          )}
        />
      </div>
    </>
  );
};

export default Homepage;
