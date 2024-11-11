"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[1px] w-full max-w-md relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-800 rounded-lg" />
      <div
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center
             bg-slate-950 px-7 rounded-lg  relative group transition duration-200 ease-in-out text-white hover:bg-transparent gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
