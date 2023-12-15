import clsx from "clsx";
import React from "react";
import AnimatedText from "./AnimatedText";
import LuminiateLogo from "./LuminiateLogo";
import {
  CSSLogo,
  HTMLLogo,
  JSLogo,
  ReactLogo,
  TailwindLogo,
} from "../../public/Images.jsx";

const Introduction = () => {
  console.log(CSSLogo);
  return (
    <div className="flex h-[100vh] w-full flex-col place-items-center justify-center">
      <div className="flex flex-col">
        <p className=" text-5xl">
          <AnimatedText text="Hello, I’m Tulza" /> 👋
        </p>
        <p className="text-2xl">Passionate in UX / UI, working with</p>
      </div>
      <div className="flex flex-row">
        <LuminiateLogo logo={CSSLogo} />
        <LuminiateLogo logo={HTMLLogo} />
        <LuminiateLogo logo={JSLogo} />
        <LuminiateLogo logo={ReactLogo} />
        <LuminiateLogo logo={TailwindLogo} />
      </div>
      {/* Page lumination */}
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
  );
};

export default Introduction;
