import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import { portfolioData } from "../data/data";
import {
  HiUser,
  HiBriefcase,
  HiAcademicCap,
  HiCode,
  HiMail,
} from "react-icons/hi";

export const Header = () => {
  return (
    <Navbar fluid rounded className="bg-white dark:bg-gray-800 shadow-md">
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {portfolioData.name.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold dark:text-white">
              {portfolioData.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {portfolioData.job}
            </span>
          </div>
        </div>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#about" className="flex items-center gap-2">
          <HiUser className="text-lg" />
          <span>About</span>
        </NavbarLink>
        <NavbarLink href="#education" className="flex items-center gap-2">
          <HiAcademicCap className="text-lg" />
          <span>Education</span>
        </NavbarLink>
        <NavbarLink href="#skills" className="flex items-center gap-2">
          <HiCode className="text-lg" />
          <span>Skills</span>
        </NavbarLink>
        <NavbarLink href="#projects" className="flex items-center gap-2">
          <HiBriefcase className="text-lg" />
          <span>Projects</span>
        </NavbarLink>
        <NavbarLink href="#contact" className="flex items-center gap-2">
          <HiMail className="text-lg" />
          <span>Contact</span>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
