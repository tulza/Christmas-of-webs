import React from "react";
import Windmill from "../Windmill";

const LoadingScreen = () => {
  return (
    <>
      <div className="absolute z-10 flex h-full w-full place-items-center justify-center bg-white">
        <Windmill size="2" />
        
        {/* test */}
      </div>
    </>
  );
};

export default LoadingScreen;
