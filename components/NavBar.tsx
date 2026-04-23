"use client";
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "top", label: "Home", icon: <FaHome /> },
  { id: "aboutme-section", label: "About" },
  { id: "skills-section", label: "Skills" },
  { id: "projects-section", label: "Projects" },
  { id: "contact-section", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "navbar z-50 sticky top-0 flex justify-between items-center p-4 mx-auto transition-all duration-300",
        scrolled
          ? "bg-black-100/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-xl md:text-2xl font-space font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
        Rakesh Pokala
      </h1>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="text-blue-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black-100/95 backdrop-blur-md shadow-lg overflow-hidden z-50"
          >
            <ul className="flex flex-col space-y-2 p-4 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full py-2 px-4 rounded-md text-sm transition-colors flex items-center justify-center gap-2",
                      activeSection === item.id
                        ? "text-red-400 bg-red-500/10"
                        : "text-blue-100 hover:text-red-400"
                    )}
                  >
                    {item.icon && item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      <ul className="nav-menu hidden md:flex space-x-6 tracking-widest text-xs text-center text-blue-100">
        {navItems.map((item) => (
          <li key={item.id} className="relative whitespace-nowrap">
            <button
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "flex items-center gap-1.5 pb-1 transition-colors",
                activeSection === item.id
                  ? "text-red-400"
                  : "hover:text-red-400"
              )}
            >
              {item.icon && item.icon}
              {item.label}
            </button>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
