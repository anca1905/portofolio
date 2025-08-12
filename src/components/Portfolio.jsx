import React, { useEffect } from "react";
import mockup from "../images/mockup-1.png";
import mockup_2 from "../images/mockup-2.png";
import mockup_3 from "../images/mockup-3.png";
import Card from "./Card";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
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
          img={mockup}
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

        {/* <Card
          img={mockup_2}
          title={"Landing Page"}
          description={
            "Landing page build for restaurant business with information about menu and connect to social media and whatsapp admin"
          }
          icon={<TiHtml5 />}
          icon_2={<RiTailwindCssFill />}
          icon_3={<IoLogoJavascript />}
          icon_4={<SiDaisyui />}
          classnameIconB={"hidden"}
          link={"https://riskymahendraa.github.io/restaurant-landing-page/"}
          link_github={
            "https://github.com/riskymahendraa/restaurant-landing-page"
          }
        />
        <Card
          img={mockup_3}
          title={"Landing Page"}
          description={
            "Landing page build for carwash or motowash business with information about services and connect to social media and whatsapp admin"
          }
          classnameIcon={"hidden"}
          icon={<TiHtml5 />}
          icon_5={<FaBootstrap />}
          icon_3={<IoLogoJavascript />}
          classnameIconT={"hidden"}
          link={"https://riskymahendraa.github.io/motowashweb/"}
          link_github={"https://github.com/riskymahendraa/motowashweb"}
        /> */}
      </div>
    </div>
  );
};

export default Portfolio;
