import type { PersonalInfo, Project, Skill, Education } from "./person";

export type PortfolioData = {
    personalInfo: PersonalInfo;
    education: Education[];
    skills: Skill[];
    projects: Project[];
}