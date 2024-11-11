"use client";
import React from "react";
import { HoverEffect } from "./ui/HoverEffect";
// Define a type for the skills
type Skill = {
  name: string;
  level?: number; // Optional for cards without progress bars
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

// Data for skills
const skills: SkillCategory[] = [
  {
    category: "BackEnd/API Development",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Spring Batch" },
      { name: "Java Server Pages" },
      { name: "Jasper Reports" },
      { name: "Spring Security" },
      { name: "Hibernate" },
      { name: "Apache Kafka" },
      { name: "Spring JPA" },
      { name: "Microservices" },
      { name: "Apache Camel" },
      { name: "Spring REST" },
      { name: "Fast API" },
      { name: "Flask" },
    ],
  },
  {
    category: "FrontEnd Development",
    skills: [
      { name: "React.js" },
      { name: "Angular JS" },
      { name: "Apache FTL" },
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Next.js" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "Git" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "Shell Scripting" },
      { name: "Log4j" },
      { name: "Maven" },
      { name: "Gradle" },
      { name: "Apache Camel" },
      { name: "Sonar" },
    ],
  },
  {
    category: "Blockchain & IoT",
    skills: [
      { name: "Blockchain" },
      { name: "Solidity" },
      { name: "IoT" },
      { name: "Golang" },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Natural Language Processing NLP" },
      { name: "Python" },
      { name: "Data Analysis" },
      { name: "Machine Learning" },
      { name: "Apache Spark" },
      { name: "Big Data Hadoop" },
    ],
  },
  {
    category: "SQL & Databases",
    skills: [
      { name: "MySQL" },
      { name: "Oracle" },
      { name: "Maria DB" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
  {
    category: "Domain & Business",
    skills: [
      { name: "Healthcare" },
      { name: "Medical Insurance" },
      { name: "Telecommunication" },
      { name: "ECommerce" },
      { name: "Capital Markets" },
    ],
  },
  {
    category: "QA Testing",
    skills: [
      { name: "Gherkin" },
      { name: "JUnit" },
      { name: "Integration Testing" },
      { name: "Jasmine Testing" },
      { name: "Cucumber" },
    ],
  },
];

// Card component for "Tech Competency" with skill bars
const TechCompetencyCard: React.FC<SkillCategory> = ({ category, skills }) => {
  return (
    <div
      id="skills-section"
      className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 w-full mb-8"
    >
      <h3 className="text-2xl font-semibold dark:text-white">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-1">
              <h4 className="text-lg font-medium dark:text-gray-300">
                {skill.name}
              </h4>
              {/* Progress bar */}
              <div className="relative mt-2">
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-600">
                  <div
                    className="h-2 rounded-full bg-red-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {skill.level}% Proficiency
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main skill set component
const SkillSet: React.FC = () => {
  // Define the Tech Competency card
  const techCompetencyCategory = {
    category: "Tech Competency",
    skills: [
      { name: "BackEnd API Development", level: 99 },
      { name: "BackEnd Batch Processing", level: 95 },
      { name: "Data Structures & Algorithms", level: 75 },
      { name: "System Design & Architecture", level: 70 },
      { name: "SQL & Databases", level: 70 },
      { name: "DevOps & Cloud", level: 75 },
      { name: "QA Testing", level: 70 },
      { name: "FrontEnd UI Development", level: 65 },
      { name: "Blockchain & IoT", level: 60 },
      { name: "Data Science, Gen AI, ML", level: 60 },
      { name: "Electronics & Embedded Systems", level: 50 },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Full-width Tech Competency Card */}
      <div className="w-full">
        <TechCompetencyCard
          category={techCompetencyCategory.category}
          skills={techCompetencyCategory.skills}
        />
      </div>

      {/* Parallel cards below with hover effect */}
      <HoverEffect
        items={skills.map((skillCategory) => ({
          title: skillCategory.category,
          description: skillCategory.skills
            .map((skill) => skill.name)
            .join(", "),
          link: "#", 
        }))}
      />
    </div>
  );
};

export default SkillSet;
