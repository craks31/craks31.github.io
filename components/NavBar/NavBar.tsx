"use client"; 
import React, { useState } from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar z-10 realtive flex justify-around items-center p-4 mx-auto">
       <h1 className="uppercase text-lg whitespace-nowrap p-0">Sai Rakesh Pokala</h1>
      <ul className="nav-menu flex space-x-8 tracking-widest text-xs text-center text-blue-100 max-w-80">
      <li className="flex items-center space-x-2">
          <FaHome /> <span>Home</span>
        </li>
        <li className="whitespace-nowrap">About me</li>
        <li className="whitespace-nowrap">Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
