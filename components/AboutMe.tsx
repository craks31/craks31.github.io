"use client";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";


const AboutMe = () => {
  return (
    <AuroraBackground id="aboutme-section">
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
        <div className="text-lg md:text-3xl font-bold dark:text-white text-center">
          About Me
        </div>
        <div className="font-light text-sm md:text-lg dark:text-neutral-200 py-2 text-center">
          Full Stack Developer & AI Engineer Passionate About Building Solutions
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg lg:max-w-5xl mx-auto">
          {/* Experience Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col justify-between w-full h-full"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              Years of Experience
            </h3>
            <p className="mt-2 text-xl md:text-3xl font-bold text-blue-500">
              {PROFILE.yearsOfExperience}
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col justify-between w-full h-full"
          >
            <h3 className="text-base md:text-sm font-semibold text-gray-800 dark:text-white">
              Education
            </h3>
            <p className="mt-2 text-xs font-small text-gray-600 dark:text-gray-300">
              {PROFILE.education.masters.degree}
            </p>
            <p className="mt-1 text-xs font-small text-gray-600 dark:text-gray-300">
              {PROFILE.education.bachelors.degree}
            </p>
          </motion.div>



          {/* Industries Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center flex flex-col justify-between w-full h-full"
          >
            <h3 className="text-base md:text-sm font-semibold text-gray-800 dark:text-white">
              Industries
            </h3>
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {[
                "Healthcare",
                "Telecom",
                "ECommerce",
                "Capital Markets",
                "Retail",
                "Insurance",
              ].map((industry) => (
                <span
                  key={industry}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About Paragraph */}
        <div className="max-w-sm md:max-w-2xl mx-auto px-4 mt-2">
          <p className="text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            With {PROFILE.yearsOfExperience} years of experience in software
            development, I specialize in building scalable Java microservices,
            architecting Agentic AI frameworks with RAG pipelines and Model
            Context Protocol (MCP), and delivering cloud-native solutions on AWS
            and Azure. Currently at AT&T, I design TMF-compliant commerce
            platforms and lead AI-Fueled Coding initiatives for autonomous
            development workflows. My work spans full-stack delivery with React,
            Angular, and Spring Boot across healthcare, telecom, capital markets,
            and e-commerce domains.
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default AboutMe;
