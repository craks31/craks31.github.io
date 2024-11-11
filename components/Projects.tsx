import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Cloud based Real Time Traffic Monitoring",
    liveDemoLink: null,
    repoLink:
      "https://github.com/craks31/Cloud-based-Real-Time-Traffic-Monitoring",
    description:
      "The goal of this project is to build a cloud-based traffic analysis system that can analyze the traffic data from historic data. The big data is processed through Kafka and analyzed through Spark framework to provide the analysis.",
  },
  {
    title: "College Chatbot",
    liveDemoLink: null,
    repoLink: "https://github.com/craks31/CollegeChatbot",
    description:
      "Developed the student chatbot app using NLP, TF-IDF, Cosine similarity & Flask.",
  },
  {
    title: "Quantum Safe Algorithm XMSS for payment security",
    liveDemoLink: null,
    repoLink: "https://github.com/craks31/quantumsafexmssdemo",
    description:
      "Demonstrated the XMSS as a quantum safe contestant for the use in payment security data communications.",
  },
  {
    title: "Nine Men Morris Digital Board Game ",
    liveDemoLink: null,
    repoLink: "https://github.com/craks31/NineMenMorrisDigitalBoardGame",
    description:
      "Developed Nine Men Morris Digital Board Game based on Java and Java FX following software development life cycle and AGILE methodologies",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects-section" className="w-full max-w-6xl mx-auto mt-10">
      <div className="text-justify mb-6 px-4">
        {" "}
        {/* Added padding to ensure text section is properly centered */}
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          My Projects
        </p>
      </div>
      <Carousel className="w-full max-w-6xl mx-auto relative">
        {" "}
        {/* Ensure it's centered and responsive */}
        <CarouselContent className="flex items-center mb-5">
          {" "}
          {/* Align items to make sure all cards stay consistent */}
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="p-4 flex justify-center items-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-shadow duration-300 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-justify">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  {/* View Project Button */}
                  {project.liveDemoLink && (
                    <div className="mb-4">
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm md:text-base"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                  {/* GitHub Link Button */}
                  <a
                    // href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-orange-600"
                  >
                    <FiGithub size={24} />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel navigation buttons for larger screens */}
        <CarouselPrevious className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10" />
        {/* Center bottom navigation buttons for small screens */}
        <div className="md:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
          <CarouselPrevious className="w-10 h-10 bg-gray-200 rounded-full p-2 flex items-center justify-center" />
          <CarouselNext className="w-10 h-10 bg-gray-200 rounded-full p-2 flex items-center justify-center" />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
