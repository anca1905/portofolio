/* eslint-disable */
import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="py-4 max-w-xs md:max-w-md lg:max-w-5xl mx-auto border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="flex justify-between items-center px-1">
        {/* Brand / Logo */}
        <a href="#" className="text-lg md:text-xl font-bold tracking-tight">
          <span className="text-orange-500">ANCA</span>
          <span className="text-slate-800 dark:text-neutral-200">.DEV</span>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 md:gap-5 items-center">
          <a
            rel="noopener noreferrer"
            href="https://github.com/anca1905"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl md:text-4xl text-slate-700 dark:text-neutral-300 hover:text-orange-500 hover:scale-110 py-1 transition-all duration-200" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/anca_is_core/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl md:text-4xl text-slate-700 dark:text-neutral-300 hover:text-orange-500 hover:scale-110 py-1 transition-all duration-200" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=6282291700778&text&type=phone_number&app_absent=0"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-3xl md:text-4xl text-slate-700 dark:text-neutral-300 hover:text-orange-500 hover:scale-110 py-1 transition-all duration-200" />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 md:p-2.5 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-yellow-400 hover:scale-110 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 shadow-sm cursor-pointer"
          title={theme === "dark" ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)"}
        >
          {theme === "dark" ? (
            <FaSun className="text-lg md:text-xl text-yellow-400" />
          ) : (
            <FaMoon className="text-lg md:text-xl text-slate-700" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
