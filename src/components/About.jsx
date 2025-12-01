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
            I am a passionate Web Developer specializing in the <span className="text-orange-500 font-bold">Laravel and Vue.js</span> ecosystem.
            Currently applying my skills professionally at{" "}
            <span className="text-orange-500 font-bold">Techno’s Studio Kendari</span>,
            I focus on building robust backend architectures and seamless frontend interactions.
            I believe that good code isn't just about function—it's about scalability and clean structure.
          </p>
        </div>
        <div className="flex justify-center items-center font-light tracking-tight text-sm md:text-base">
          <p>
            Beyond the syntax, I value <span className="text-orange-500 font-bold">collaboration and adaptability</span>.
            Whether it's integrating modern tools to optimize workflows or solving complex bugs with a team,
            I thrive in dynamic environments. My goal is to contribute to impactful projects that require
            both technical precision and creative problem-solving.
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