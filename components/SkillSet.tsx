"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/HoverEffect";
import { skills, techCompetency } from "@/data/skills";
import type { SkillCategory } from "@/data/skills";

function getBarGradient(level: number): string {
  if (level >= 90) return "from-emerald-400 to-emerald-600";
  if (level >= 75) return "from-blue-400 to-blue-600";
  if (level >= 60) return "from-amber-400 to-amber-600";
  return "from-gray-400 to-gray-500";
}

const TechCompetencyCard: React.FC<SkillCategory> = ({ category, skills }) => {
  return (
    <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 w-full mb-8">
      <h3 className="text-2xl font-semibold dark:text-white">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm md:text-base font-medium dark:text-gray-300">
                  {skill.name}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="relative mt-2">
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-600">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${getBarGradient(
                      skill.level!
                    )}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillSet: React.FC = () => {
  return (
    <div id="skills-section" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="heading mb-10">
        My <span className="text-red-500">Skills</span>
      </h2>

      {/* Full-width Tech Competency Card */}
      <div className="w-full">
        <TechCompetencyCard
          category={techCompetency.category}
          skills={techCompetency.skills}
        />
      </div>

      {/* Skill category cards with hover effect */}
      <HoverEffect
        items={skills.map((skillCategory) => ({
          title: skillCategory.category,
          description: skillCategory.skills
            .map((skill) => skill.name)
            .join(", "),
        }))}
      />
    </div>
  );
};

export default SkillSet;
