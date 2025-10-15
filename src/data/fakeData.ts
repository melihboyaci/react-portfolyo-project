import { faker } from "@faker-js/faker"

export const fakeData = () => {
  return {
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    location: faker.location.city(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    imageUrl: faker.image.avatar(),
    education: [
      {
        school: "University of Example",
        degree: "B.Sc. in Computer Science",
        year: "2020",
      }
    ],
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
    projects: [
      {
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        link: "https://example.com/portfolio",
      },
      {
        name: "Task Manager App",
        description: "A web application to manage daily tasks and to-dos.",
        link: "https://example.com/task-manager",
      },
    ],
  }
}
