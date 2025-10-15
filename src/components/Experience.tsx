import React from "react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { portfolioData } from "../data/data";

const Experience = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-100 flex">
        İş Tecrübelerim
      </h2>
      <br />
      <Timeline>
        {portfolioData.experience.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineContent>
              <TimelineTime className="text-blue-300 font-semibold">
                {experience.startDate} - {experience.endDate}
              </TimelineTime>
              <TimelineTitle className="text-2xl text-white font-bold mt-2">
                {experience.position}
              </TimelineTitle>
              <TimelineTitle className="text-xl text-blue-200 font-medium mt-1">
                {experience.company}
              </TimelineTitle>
              <TimelineBody className="text-gray-300 mt-3 leading-relaxed">
                {experience.description}
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
