import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-8 py-6 transition-colors duration-300">
      <div className="text-center md:flex md:justify-between items-center max-w-xs md:max-w-md lg:max-w-5xl mx-auto px-2">
        <div className="text-sm text-slate-600 dark:text-neutral-400 font-light tracking-wide">
          Copyright © 2025. Created By <span className="font-medium text-slate-800 dark:text-neutral-200">Anca_Cu</span> | All Rights Reserved
        </div>
        <div className="my-2 justify-center items-center flex gap-4 md:gap-5">
          <div>
            <a
              rel="noopener noreferrer"
              href="https://github.com/anca1905"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl md:text-3xl text-slate-600 dark:text-neutral-400 hover:text-orange-500 hover:scale-110 transition-all duration-200" />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/anca_is_core/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl md:text-3xl text-slate-600 dark:text-neutral-400 hover:text-orange-500 hover:scale-110 transition-all duration-200" />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=6282291700778&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl md:text-3xl text-slate-600 dark:text-neutral-400 hover:text-orange-500 hover:scale-110 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
