import React, { useEffect } from "react";
import Education from "./Education";
import Aos from "aos";
import "aos/dist/aos.css";

const EducationLayout = (props) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
      >
        <h1 className="text-2xl text-center font-light my-3 tracking-wide">
          Education
        </h1>
        <div className="relative w-full md:w-1/2 border-l-2 border-slate-800 mx-auto lg:mx-72">
          
          {/* Universitas Sembilan Belas November Kolaka */}
          <Education
            title={"Universitas Sembilanbelas November Kolaka"}
            description2={"Kolaka, Indonesia"}
            description={
              "Currently pursuing a Bachelor's degree in Information Systems (Semester 7). Focused on web development and information technology."
            }
          />
          <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800"></div>

          {/* Pertukaran Mahasiswa Universitas Airlangga */}
          <div className="relative">
            <Education
              title={"Universitas Airlangga"}
              description2={"Surabaya, Indonesia"}
              description={
                "Participate in the Merdeka Student Exchange Program Batch 4 in 2024 to broaden academic and cultural experiences."
              }
            />
            <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800"></div>
          </div>

          {/* SMK Negeri 03 Bombana */}
          <div className="relative">
            <Education
              title={"SMK Negeri 03 Bombana"}
              description2={"Bombana, Indonesia"}
              description={
                "Graduated in 2022 with a major in Computer and Network Engineering (Teknik Komputer dan Jaringan)."
              }
            />
            <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationLayout;
