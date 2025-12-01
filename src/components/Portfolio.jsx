import React, { useEffect } from "react";
import projectMaxcell from "../images/portofolio/maxcell.png"; // Ganti nama file 6.png jadi maxcell.png
import projectSiap from "../images/portofolio/siap-konkep.png"; // Ganti nama file 7.png jadi siap-konkep.png
import projectSimadun from "../images/portofolio/simadun.png";
import portofolio from "../images/portofolio/portofolio.png";
import javalearn from "../images/portofolio/javalearn.png";
import absensi from "../images/portofolio/absensi.png";
import Card from "./Card";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMysql, SiCodeigniter } from "react-icons/si";
import { FaReact, FaPhp, FaBootstrap, FaLaravel, FaJs, FaCss3Alt } from "react-icons/fa";
// import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
// import { FaBootstrap, FaLaravel, FaJs } from "react-icons/fa";
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
        {/* PROJECT 1: MAXCELL */}
        <Card
          img={projectMaxcell}
          title={"Maxcell Official Website"}
          description={
            "Optimized the biggest building depot website in Sulawesi. Tasks included debugging, improving Product Detail UI, revamping Search functionality for speed, and refactoring the Navbar/Footer for better UX."
          }
          // Tech Stack (Disesuaikan dengan maintenance frontend/backend)
          icon={<FaLaravel className="text-red-600 text-2xl" />}
          icon_2={<FaBootstrap className="text-purple-600 text-2xl" />}
          icon_3={<GrMysql className="text-blue-500 text-2xl" />}
          icon_4={<FaPhp className="text-indigo-500 text-2xl" />}
          classnameIconB={"hidden"}
          link={"https://www.maxcell.co.id/"}
        // link_github={"#"} // Private Repo (Company Project)
        />

        {/* PROJECT 2: SIAP KONKEP */}
        <Card
          img={projectSiap}
          title={"SIAP KONKEP (E-Gov)"}
          description={
            "Developed core modules for the Government Employee Attendance System. Created complex forms for Employee History (Rank, Family, Awards) and implemented Excel Data Export features for competency analysis."
          }
          // Tech Stack (Biasanya Pemda pakai PHP/Laravel/CI + Bootstrap)
          icon={<SiCodeigniter  className="text-red-600 text-2xl" />}
          icon_2={<FaBootstrap className="text-purple-600 text-2xl" />}
          icon_3={<GrMysql className="text-blue-500 text-2xl" />}
          icon_4={<FaPhp className="text-indigo-500 text-2xl" />}
          classnameIconB={"hidden"}
          link={"https://siap.konkepkab.go.id/"}
        // link_github={"#"}
        />

        {/* PROJECT 3: SIMADUN KONASARA */}
        <Card
          img={projectSimadun}
          title={"SIMADUN KONASARA"}
          description={
            "Designed and built the Landing Page for the Population Administration Management System. Focused on creating a clean, informative, and responsive interface for public access."
          }
          // Tech Stack (Landing Page focus)
          icon={<FaLaravel className="text-red-500 text-2xl" />}
          icon_2={<FaBootstrap className="text-purple-600 text-2xl" />}
          icon_3={<FaJs className="text-yellow-400 text-2xl" />}
          icon_4={<FaReact className="text-blue-400 text-2xl" />} // Asumsi pakai React/Basic
          classnameIconB={"hidden"}
          link={"https://simadun-konasara.projectkoding.com/"}
        // link_github={"#"}
        />

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
