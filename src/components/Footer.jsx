import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="text-center md:flex md:justify-between items-center max-w-xs md:max-w-md lg:max-w-5xl mx-auto my-2">
        <div className="text-sm text-neutral-300 font-light tracking-wide">
          Copyright © 2024. Create By Love | All Rights Reserved
        </div>
        <div className="my-2 justify-center items-center flex gap-4 md:gap-5">
          <div>
            <a
              rel="noopener noreferrer"
              href="https://github.com/riskymahendraa"
              target="_blank"
            >
              <FaGithub className="text-3xl text-neutral-300 hover:text-orange-500 hover:scale-110 hover:transition-all hover:duration-200" />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/riskymahendraa/"
              target="_blank"
            >
              <FaInstagram className="text-3xl text-neutral-300 hover:text-orange-500 hover:scale-110 hover:transition-all hover:duration-200" />
            </a>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=6281237258566&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp className="text-3xl text-neutral-300 hover:text-orange-500 hover:scale-110 hover:transition-all hover:duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
