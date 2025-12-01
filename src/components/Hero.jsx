import React from "react";
import Button from "./Button";
import profile from "../images/profile.jpeg";
import myResume from "../assets/cvKerja.pdf";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 max-w-xs md:max-w-md lg:max-w-5xl mx-auto mt-16 border-slate-800 border-b pb-10">
      <div>
        <h1 className="text-2xl font-light">
          MUH <span className="text-orange-500 tracking-wide">ARSYAD</span> RAMSI
        </h1>

        {/* UPDATED: Headline lebih spesifik ke skill utama */}
        <div className="my-2 font-bold tracking-wide">
          Junior Web Developer | Laravel & Vue.js Specialist
        </div>

        {/* UPDATED: Deskripsi lebih padat & menjual */}
        <div className="my-3">
          Passionate about building scalable web applications with clean code.
          Currently applying my skills in <b>Fullstack Development</b> to solve real-world problems
          as an Intern at <b>Techno’s Studio</b>. I am dedicated to continuous learning
          in backend engineering and system architecture.
        </div>

        <a href={myResume} download>
          <Button
            text={"Download CV"}
            classname={
              "bg-orange-500 btn-md font-bold hover:bg-orange-400 hover:scale-105 hover:transition-all hover:duration-300"
            }
          />
        </a>
      </div>
      <div className="flex justify-center my-2 items-center">
        <div>
          <img
            src={profile}
            className="rounded-full text-2xl font-bold h-72 w-72 shadow-md shadow-orange-500 object-cover"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;