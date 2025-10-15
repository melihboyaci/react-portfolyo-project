import React from "react";
import { Avatar } from "flowbite-react";
import { portfolioData } from "../data/data";
import { Card } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        className="max-w-sm flex items-center"
        style={{ backgroundColor: "#0d0d0c" }}
      >
        <div className="flex flex-col items-center pb-10">
          <Avatar
            img={portfolioData.imageUrl}
            rounded
            size="xl"
            className="mb-4"
            alt="User Avatar"
          />
          <h5 className="mb-1 text-3xl font-medium text-white dark:text-white">
            {portfolioData.name}
          </h5>
          <br />
          <h2 className="mb-1 text-l font-medium text-white dark:text-white">
            Frontend Developer
          </h2>
          <div className="mt-4 space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300">
              <HiMail className="text-l" />
              <span className="text-l">{portfolioData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300">
              <HiPhone className="text-l" />
              <span className="text-l">{portfolioData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300">
              <HiLocationMarker className="text-l" />
              <span className="text-l">{portfolioData.location}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
