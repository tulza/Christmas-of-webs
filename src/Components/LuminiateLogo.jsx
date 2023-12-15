import React from "react";

const LuminiateLogo = ({ logo }) => {
  console.log(logo);
  return (
    <div className="radical-limination-circle flex aspect-square w-[200px] items-center justify-center">
      <img src={logo} alt="" />
    </div>
  );
};

export default LuminiateLogo;
