/* eslint-disable */
import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="py-3 max-w-xs md:max-w-md lg:max-w-5xl mx-auto border-slate-800 border-b">
      <div className="text-center flex justify-center gap-4 my-2 items-center">
        <a
          rel="noopener noreferrer"
          href="https://github.com/riskymahendraa"
          target="_blank"
        >
          <FaGithub className="text-4xl text-neutral-300 hover:text-orange-400 hover:scale-110 hover:border-b-2 hover:border-orange-400 py-1 hover:transition-all hover:duration-200" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/riskymahendraa/"
          target="_blank"
        >
          <FaInstagram className="text-4xl text-neutral-300 hover:text-orange-400 hover:scale-110 hover:border-b-2 hover:border-orange-400 py-1 hover:transition-all hover:duration-200" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=6281237258566&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp className="text-4xl text-neutral-300 hover:text-orange-400 hover:scale-110 hover:border-b-2 hover:border-orange-400 py-1 hover:transition-all hover:duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
