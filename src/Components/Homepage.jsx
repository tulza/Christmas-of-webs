import React, { useState } from "react";
import NavDesktop from "./Navigation/NavDesktop";

const Homepage = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <NavDesktop setPage={setPage} />

      </div>
    </>
  );
};

export default Homepage;
