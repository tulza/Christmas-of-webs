import React, { useState } from "react";
import NavDesktop from "./Navigation/NavDesktop";

const Homepage = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <NavDesktop setPage={setPage} />
        <div className="relative grid aspect-square w-20 grid-cols-2">
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
      </div>
    </>
  );
};

export default Homepage;
