"use client";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4 h-full w-full"
    >
      {/* About Me Header */}
      <div className="text-lg md:text-3xl font-bold dark:text-white text-center">
        About Me
      </div>
      <div className="font-light text-sm md:text-lg dark:text-neutral-200 py-2 text-center">
        Full Stack Developer Passionate About Building Solutions
      </div>
  
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg md:max-w-4xl mx-auto ">
  {/* Experience Card */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col justify-between w-full h-full"
  >
    <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
      Years of Experience
    </h3>
    <p className="mt-2 text-xl md:text-3xl font-bold text-blue-500">5+</p>
  </motion.div>

  {/* Education Card */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col justify-between w-full h-full"
  >
    <h3 className="text-base md:text-sm font-semibold text-gray-800 dark:text-white">
      Education
    </h3>
    <p className="mt-2 text-xs md:text-xs font-small text-gray-600 dark:text-gray-300">
      MS in Computer Science (Masters)
    </p>
    <p className="mt-2 text-xs md:text-xs font-small text-gray-600 dark:text-gray-300">
      B.Tech in Electronics & Communication Engineering (Bachelors)
    </p>
  </motion.div>
</div>
  
      {/* About Paragraph */}
      <div className="max-w-sm md:max-w-lg mx-auto px-4 mt-2">
        <p className="text-xs md:text-sm lg:text-base sm:text-xs text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          With years of experience in software development, I've worked
          with various tech stack like Java, Spring, Angular, IoT, BlockChain, GenAI, 
          Batch Processing, AWS Cloud, Golang, AngularJS, React, Next.js, Node.js, and SQL. 
          I enjoy tackling real-world problems through code and am always eager to
          take on new challenges. My work spans across multiple industries,
          contributing to impactful projects.
        </p>
      </div>
    </motion.div>
  </AuroraBackground>
  
  );
};

export default AboutMe;
