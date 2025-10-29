// src/components/Header.tsx

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

import { portfolioData } from "../data/data";
import { HiUser, HiBriefcase, HiAcademicCap, HiCode } from "react-icons/hi";

export const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
    ].join(" ");

  return (
    <Navbar fluid rounded className="bg-white dark:bg-gray-800 shadow-md">
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            {portfolioData.imageUrl ? (
              <img
                src={portfolioData.imageUrl}
                alt={`${portfolioData.name} profil resmi`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-bold text-xl">
                {portfolioData.name.charAt(0)}
              </span>
            )}
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
        <NavLink to="/" className={navLinkClass} end>
          <HiUser className="text-lg" />
          <span>Hakkımda</span>
        </NavLink>
        <NavLink to="/tecrubelerim" className={navLinkClass}>
          <HiAcademicCap className="text-lg" />
          <span>Tecrübelerim</span>
        </NavLink>

        <NavLink to="/yeteneklerim" className={navLinkClass}>
          <HiCode className="text-lg" />
          <span>Yeteneklerim</span>
        </NavLink>

        <NavLink to="/projelerim" className={navLinkClass}>
          <HiBriefcase className="text-lg" />
          <span>Projelerim</span>
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
};
