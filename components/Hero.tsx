"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaFileDownload, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative z-0"> 
  <div>
    <Spotlight
      className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
      fill="white"
    />
    <Spotlight
      className="top-30 left-full h-[80vh] w-[50vw]"
      fill="purple"
    />
    <Spotlight
      className="top-28 left-80 h-[80vh] w-[50vw]"
      fill="blue"
    />
  </div>

  <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </div>

  <div className="flex flex-col items-center justify-center relative my-20 z-10 gap-3">
    {/* Adjust image positioning */}
    <div className="flex justify-center items-center mt-4 mb-4 relative z-20">
      <img
        src="/images/dp.jpg"
        alt="Profile"
        className="w-32 h-32 sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
        style={{ aspectRatio: 1 / 1 }}
      />
    </div>
    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <p className="uppercase tracking-widest mb-4 text-xs text-center text-blue-100 max-w-80">
        Namasthe World. I&apos;m
      </p>
      <p className="text-center md:tracking-wider text-[20px] md:text-3xl lg:text-4xl">
        Sai Rakesh Pokala
      </p>
      <p className="text-center md:tracking-wider text-[20px] sm:text-xl md:text-2xl lg:text-3xl">
        Software Engineer
      </p>

      <TextGenerateEffect
        words="Building the Future Through Code and Innovation."
        className="text-center text-[40px] md:text-4xl lg:text-6xl"
      />

      <div className="flex space-x-3 mt-2">
        <MagicButton
          title="Download CV"
          icon={<FaFileDownload />}
          handleClick={() => {
            window.open('/docs/cv.pdf', '_blank');
          }}
          position="right"
        />
        <MagicButton
          title="Contact Info"
          icon={<FaPhone />}
          position="right"
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default Hero;
