import React, { useState } from "react";
import NavDesktop from "./Navigation/NavDesktop";
import Windmill from "./Windmill";
import LoadingScreen from "./Loading Components/LoadingScreen";
import { useEffect } from "react";
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
        {/* <LoadingScreen /> */}
        <NavDesktop setPage={setPage} />
        <Introduction />
      </div>
    </>
  );
};

export default Homepage;
