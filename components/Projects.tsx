import React from 'react'; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  {
    title: 'Project One',
    description: 'This is the first project. It involves building a full-stack web application with React and Node.js.',
  },
  {
    title: 'Project Two',
    description: 'This project is about blockchain integration using Solidity and Ethereum smart contracts.',
  },
  {
    title: 'Project Three',
    description: 'An IoT-based solution for monitoring environmental conditions in real-time.',
  },
  {
    title: 'Project Four',
    description: 'A data visualization dashboard built with React and D3.js for analyzing financial data.',
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects-section" className="w-full max-w-6xl mx-auto mt-10"> {/* No changes here */}
      <div className="text-justify mb-6 px-4"> {/* Added padding to ensure text section is properly centered */}
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">My Projects</p>
      </div>
    <Carousel className="w-full max-w-6xl mx-auto relative"> {/* Ensure it's centered and responsive */}
      <CarouselContent className="flex items-center mb-5"> {/* Align items to make sure all cards stay consistent */}
        {projects.map((project, index) => (
          <CarouselItem key={index} className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 min-h-[250px] h-full flex flex-col justify-between">
              {/* Enforce a minimum height and full height */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">
                {project.description}
              </p>
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
