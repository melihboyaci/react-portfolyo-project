import { Progress } from "flowbite-react";
import React from "react";
import { portfolioData } from "../data/data";

const Skill = () => {
  const getProgressValue = (level: string) => {
    switch (level) {
      case "Advanced":
        return 90;
      case "Intermediate":
        return 70;
      default:
        return 50;
    }
  };

  const getProgressColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "blue";
      case "Intermediate":
        return "indigo";
      default:
        return "white";
    }
  };

  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-100">
        Yeteneklerim
      </h2>
      <br />
      <div className="space-y-6">
        {portfolioData.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold text-lg">
                {skill.name}
              </span>
              <span className="text-blue-300 text-sm font-medium">
                {skill.level}
              </span>
            </div>
            <Progress
              progress={getProgressValue(skill.level)}
              color={getProgressColor(skill.level)}
              size="lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
