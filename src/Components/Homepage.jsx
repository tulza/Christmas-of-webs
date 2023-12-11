import React, { useState } from "react";
import NavDesktop from "./Navigation/NavDesktop";
import Windmill from "./Windmill";
import LoadingScreen from "./Loading Components/LoadingScreen";
import { useEffect } from "react";

const Homepage = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log("reloaded");
  });

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* <LoadingScreen /> */}
        <NavDesktop setPage={setPage} />
        <div className="h-full w-full">
          <div className="h-full w-[300px] border border-white"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
