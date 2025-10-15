import React from "react";
import { Avatar } from "flowbite-react";
import { portfolioData } from "../data/data";
import { Card } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900">
      <Card className="max-w-sm flex items-center bg-gray-900 dark:bg-gray-900 border border-gray-700 shadow-xl shadow-indigo-900/30">
        <div className="flex flex-col items-center pb-10">
          <Avatar
            img={portfolioData.imageUrl}
            rounded
            size="xl"
            className="mb-4"
            alt="User Avatar"
          />
          <h5 className="mb-1 text-3xl font-medium text-white">
            {portfolioData.name}
          </h5>
          <br />
          <h2 className="mb-1 text-lg font-medium text-white">
            Frontend Developer
          </h2>
          <div className="mt-4 space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-2 text-gray-300">
              <HiMail className="text-lg text-indigo-300" />
              <span className="text-base">{portfolioData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <HiPhone className="text-lg text-indigo-300" />
              <span className="text-base">{portfolioData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <HiLocationMarker className="text-lg text-indigo-300" />
              <span className="text-base">{portfolioData.location}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
