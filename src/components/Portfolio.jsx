import React, { useEffect } from "react";
import portofolio from "../images/portofolio/portofolio.png";
import javalearn from "../images/portofolio/javalearn.png";
import absensi from "../images/portofolio/absensi.png";
import Card from "./Card";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap, FaLaravel, FaJs } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
    >
      <h1 className="text-2xl text-center font-light my-4 tracking-wide ">
        Portfolio
      </h1>
      <div className="flex flex-wrap md:gap-5">
        <Card
          img={portofolio}
          title={"My Portfolio"}
          description={
            "I built this web portfolio to demonstrate my web development skills. In it, you'll find a variety of projects I've created."
          }
          icon={<TiHtml5 />}
          icon_2={<RiTailwindCssFill />}
          icon_3={<FaReact />}
          icon_4={<SiJavascript className=" text-yellow-400" />}
          classnameIconB={"hidden"}
          link={"https://anca1905.github.io/portofolio/"}
          link_github={
            "https://github.com/anca1905/portofolio"
          }
        />

        <Card
          img={javalearn}
          title={"JavaLearn"}
          description={
            "Landing page build for restaurant business with information about menu and connect to social media and whatsapp admin"
          }
          icon={<TiHtml5 className="text-orange-500" />}   // HTML
          icon_2={<FaBootstrap className="text-purple-600" />} // Bootstrap
          icon_3={<FaLaravel className="text-red-600" />}  // Laravel
          icon_4={<FaJs className="text-yellow-400" />}    // JavaScript
          classnameIconB={"hidden"}
          // link={"https://riskymahendraa.github.io/restaurant-landing-page/"}
          link_github={
            "https://github.com/riskymahendraa/restaurant-landing-page"
          }
        />
        <Card
          img={absensi}
          title={"Absensi Sekolah"}
          description={
            "Landing page build for carwash or motowash business with information about services and connect to social media and whatsapp admin"
          }
          // classnameIcon={"hidden"}
          icon={<TiHtml5 className="text-orange-500" />}       // HTML
          icon_2={<RiTailwindCssFill className="text-cyan-400" />} // Tailwind
          icon_3={<FaPhp className="text-indigo-500" />}       // PHP
          icon_4={<SiJavascript className="text-yellow-400" />} // JavaScript
          icon_5={<GrMysql className="text-blue-500" />}       // MySQL
          classnameIconT={"hidden"}
          // link={"https://riskymahendraa.github.io/motowashweb/"}
          link_github={"https://github.com/riskymahendraa/motowashweb"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
