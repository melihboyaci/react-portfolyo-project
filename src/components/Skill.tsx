import { Progress, Badge } from "flowbite-react";
import React from "react";
import { portfolioData } from "../data/data";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiAmazon,
} from "react-icons/si";

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

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      JavaScript: <SiJavascript className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-400" />,
      React: <SiReact className="text-blue-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      Python: <SiPython className="text-blue-500" />,
      PostgreSQL: <SiPostgresql className="text-blue-400" />,
      MongoDB: <SiMongodb className="text-green-400" />,
      Docker: <SiDocker className="text-blue-400" />,
      Git: <SiGit className="text-orange-500" />,
      AWS: <SiAmazon className="text-orange-500" />,
    };
    return iconMap[skillName] || null;
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
              <div className="flex items-center gap-2">
                {getSkillIcon(skill.name)}
                <span className="text-white font-semibold text-lg">
                  {skill.name}
                </span>
              </div>
              <Badge color="info" size="sm">
                {skill.level}
              </Badge>
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
