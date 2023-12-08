import React from "react";

export const Button = ({ label }) => {
  return (
    <button className="hover: w-[100px] bg-white hover:bg-DarkPurple">
      {label}
    </button>
  );
};

const NavDesktop = ({ setPage }) => {
  return (
    <div className="flex h-[100px] flex-row justify-center gap-4 p-6 outline outline-white">
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default NavDesktop;
