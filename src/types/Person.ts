export type PersonalInfo = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  imageUrl: string;
};

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export type Skill = {
  name: string;
  level: string;
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
};

export type Project = {
  name: string;
  description: string;
  link?: string;
};
