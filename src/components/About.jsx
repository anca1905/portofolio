import React from "react";
import image_1 from "../images/image-1.jpg";
import image_2 from "../images/image-2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto"
    >
      <h1 className="text-2xl text-center font-light my-3 tracking-wide">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 mx-auto pb-10">
        <div>
          <img
            src={image_1}
            alt=""
            className="rounded-md object-cover my-2 h-56 w-full"
          />
        </div>
        <div className="flex justify-center items-center font-light tracking-tight text-sm md:text-base">
          <p>
            Hello, my name is{" "}
            <span className="text-orange-500 font-bold">Muh Arsyad Ramsi</span>.  
            I am currently a 7th-semester university student majoring in Information Technology, 
            and I am doing my internship at{" "}
            <span className="text-orange-500 font-bold">Techno’s Studio Kendari</span>  
            in the Technology Division as a Web Developer.  
            I have a deep interest in web development, especially in back-end technologies, 
            and I enjoy building functional, efficient, and scalable web applications.
          </p>
        </div>
        <div className="flex justify-center items-center font-light tracking-tight text-sm md:text-base">
          <p>
            My current goal is to continue learning, enhancing my technical skills, 
            and contributing to real-world projects that have an impact.  
            I am committed to delivering high-quality work, collaborating effectively in teams, 
            and always meeting deadlines with good time management.
          </p>
        </div>
        <div>
          <img
            src={image_2}
            alt=""
            className="rounded-md object-cover my-2 h-56 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
