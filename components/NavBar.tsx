"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar z-10 realtive flex justify-around items-center p-4 mx-auto overflow-hidden shadow-md top-0 left-0 right-0" >
      <h1 className="text-red-500 text-2xl font-extrabold tracking-wide drop-shadow-lg custom-first-letter">
        Rakesh Pokala
      </h1>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-blue-100 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
      <div className="md:hidden z-10 absolute top-16 shadow-md">
        <ul className="flex flex-col space-y-4 p-4 text-center">
          <li className="flex items-center justify-center space-x-2">
            <FaHome /> <span>Home</span>
          </li>
          <li><a href = "#aboutme-section">About me</a></li>
          <li><a href = "#skills-section">Skills</a></li>
          <li><a href = "#projects-section">Projects</a></li>
          <li><a href = "#contact-section">Contact</a></li>
        </ul>
      </div>
      )}

      {/* Full Nav Menu for Desktop */}
      <ul className="nav-menu hidden md:flex space-x-8 tracking-widest text-xs text-center text-blue-100">
        <li className="flex items-center space-x-2">
          <FaHome /> <span>Home</span>
        </li>
        <li className="whitespace-nowrap"><a href = "#aboutme-section">About me</a></li>
        <li className ="whitespace-nowrap"><a href = "#skills-section">Skills</a></li>
        <li className="whitespace-nowrap"><a href = "#projects-section">Projects</a></li>
        <li className="whitespace-nowrap"><a href = "#contact-section">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
