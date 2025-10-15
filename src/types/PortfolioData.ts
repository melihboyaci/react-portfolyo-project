import type { PersonalInfo, Project, Skill, Education } from "./Person";

export type PortfolioData = {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skill[];
  projects: Project[];
};
