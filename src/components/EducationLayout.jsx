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
          {/* Fokus: Sebutkan spesialisasi mata kuliah (Software Engineering/Database) */}
          <Education
            title={"Universitas Sembilanbelas November Kolaka"}
            description2={"Bachelor of Information Systems | 2022 - Present"}
            description={
              "Final year student focusing on Software Engineering and Database Management. Actively implementing coursework into real-world projects like Web Development and System Analysis."
            }
          />
          <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800"></div>

          {/* Pertukaran Mahasiswa Universitas Airlangga */}
          {/* Fokus: Sebutkan 'Awardee' agar terdengar prestisius & kemampuan adaptasi */}
          <div className="relative">
            <Education
              title={"Universitas Airlangga"}
              description2={"Student Exchange Program (PMM Batch 4) | 2024"}
              description={
                "Selected as an awardee for the National Merdeka Student Exchange Program. Gained cross-cultural adaptability and expanded academic perspective at one of Indonesia's top universities."
              }
            />
            <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800"></div>
          </div>

          {/* SMK Negeri 03 Bombana */}
          {/* Fokus: Fondasi teknis */}
          <div className="relative">
            <Education
              title={"SMK Negeri 03 Bombana"}
              description2={"Computer & Network Engineering | 2019 - 2022"}
              description={
                "Built a strong technical foundation in Network Infrastructure and Basic Programming Logic, graduating with excellent competency in troubleshooting."
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