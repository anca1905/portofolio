import React from "react";
// Menambahkan FaVuejs
import { FaPhp, FaPython, FaLaravel, FaHtml5, FaCss3, FaBootstrap, FaGithub, FaGitAlt, FaUnity, FaVuejs } from "react-icons/fa";
// Menambahkan SiSqlite
import { SiJavascript, SiCplusplus, SiCsharp, SiDart, SiFlutter, SiMysql, SiNotion, SiArduino, SiFigma, SiSqlite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto my-2 pb-10">
      <h1 className="text-2xl text-center font-light my-4 tracking-wide">
        Technologies
      </h1>
      <div className="flex gap-3 flex-wrap mx-auto justify-center mt-3 items-center">
        {/* Core & Backend */}
        <FaPhp className="text-4xl text-indigo-500" />
        <FaLaravel className="text-4xl text-red-500" />

        {/* Frontend JS Frameworks - Menambahkan Vue disini */}
        <FaVuejs className="text-4xl text-green-500" />
        <SiJavascript className="text-4xl text-yellow-400" />

        {/* Other Languages */}
        <FaPython className="text-4xl text-blue-400" />
        <SiCplusplus className="text-4xl text-blue-500" />
        <SiCsharp className="text-4xl text-green-500" />
        <SiDart className="text-4xl text-sky-500" />
        <SiFlutter className="text-4xl text-sky-400" />

        {/* Basic Web & Styling */}
        <FaHtml5 className="text-4xl text-orange-500" />
        <FaCss3 className="text-4xl text-blue-500" />
        <FaBootstrap className="text-4xl text-purple-500" />

        {/* Database - Menambahkan SQLite disini */}
        <SiMysql className="text-4xl text-sky-600" />
        <SiSqlite className="text-4xl text-blue-400" />

        {/* Tools */}
        <TbBrandVscode className="text-4xl text-blue-500" />
        <FaGithub className="text-4xl text-white" />
        <FaGitAlt className="text-4xl text-orange-500" />
        <SiNotion className="text-4xl text-white" />
        <SiFigma className="text-4xl text-pink-500" />

        {/* Others */}
        <SiArduino className="text-4xl text-green-500" />
        <FaUnity className="text-4xl text-gray-300" />
      </div>
    </div>
  );
};

export default Technologies;