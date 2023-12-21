import React, { useState, useEffect } from "react";
import NavDesktop from "../Navigation/NavDesktop";
import clsx from "clsx";
import Introduction from "./Introduction";
import Projects from "./Projects";

const Homepage = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log("reloaded");
  });

  return (
    <>
      <div className="w-[100vw] overflow-x-hidden">
        {/* <Introduction /> */}
        <Projects />
      </div>
    </>
  );
};

export default Homepage;
