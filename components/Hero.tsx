"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PROFILE } from "@/data/profile";

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="top" className="pb-20 pt-36 relative z-0">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-30 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col items-center justify-center relative my-20 z-10 gap-3">
        {/* Adjust image positioning */}
        <div className="flex justify-center items-center mt-4 mb-4 relative z-20">
          <img
            src="/images/dp1.png"
            alt="Profile"
            className="w-32 h-32 sm:w-32 sm:h-32 md:w-42 md:h-42 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
            style={{ aspectRatio: 1 / 1 }}
          />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest mb-4 text-xs text-center text-blue-100 max-w-80">
            Hey World. I&apos;m
          </p>
          <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 font-space font-extrabold tracking-widest text-[28px] md:text-4xl lg:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            Sai Rakesh Pokala
          </p>
          <p className="text-center md:tracking-wider text-[20px] sm:text-xl md:text-2xl lg:text-3xl">
            {PROFILE.title}
          </p>

          <TextGenerateEffect
            words="Building the Future Through Code and Innovation."
            className="text-center text-[40px] md:text-4xl lg:text-6xl"
          />

          <div className="flex space-x-3 mt-2">
            <MagicButton
              title="LinkedIn Profile"
              icon={<FaLinkedin />}
              handleClick={() => {
                window.open(PROFILE.linkedIn, "_blank");
              }}
              position="right"
            />
            <MagicButton
              title="Contact Info"
              icon={<FaPhone />}
              handleClick={handleContactClick}
              position="right"
            />
          </div>
          <div className="flex space-x-4 mt-5">
            <a
              href="https://github.com/craks31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-orange-800"
            >
              <FiGithub size={34} />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
