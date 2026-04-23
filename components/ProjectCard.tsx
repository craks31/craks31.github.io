"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-transparent hover:border-red-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Header with status */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex-1 pr-2">
          {project.title}
        </h3>

      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-red-500 hover:text-orange-500 transition-colors"
          >
            <FiGithub size={16} />
            <span>Source</span>
          </a>
        )}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-red-500 hover:text-orange-500 transition-colors"
          >
            <FiExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
