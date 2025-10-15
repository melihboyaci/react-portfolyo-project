import React from "react";
import { Card, Button } from "flowbite-react";
import { portfolioData } from "../data/data";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-100">
        Projelerim
      </h2>
      <br/>
      <div className="space-y-6">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-blue-700">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
            //   href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {/* <HiExternalLink />
              <span>Projeyi Görüntüle</span> */}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
