import React from "react";
import Button from "./Button";
import { FaEye, FaGithub } from "react-icons/fa";

const Card = (props) => {
  const {
    img,
    classname,
    classnameIcon,
    classnameIconB,
    classnameIconT,
    title,
    description = "Description",
    link = "/",
    icon,
    icon_2,
    icon_3,
    icon_4,
    icon_5,
    link_github,
  } = props;
  return (
    <div
      className={`card card-compact bg-base-100 w-72 my-2 ${classname} mx-auto shadow-xl`}
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="relative card-body bg-neutral-900 h-full">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="border-b border-slate-800 h-36 text-neutral-400 pb-5">
          <p>{description}</p>
        </div>
        <div className="flex-wrap flex gap-2 justify-center items-center my-2">
          <div className="bg-base-100 border-2 rounded-xl border-slate-800 px-2 py-1">
            <div className="text-4xl md:text-3xl text-orange-400">{icon}</div>
          </div>
          <div
            className={`bg-base-100 border-2 ${classnameIconT} rounded-xl border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl  text-cyan-400">{icon_2}</div>
          </div>
          <div className="bg-base-100 border-2 rounded-xl border-slate-800 px-2 py-1">
            <div className="text-4xl md:text-3xl text-yellow-300">{icon_3}</div>
          </div>
          <div
            className={`bg-base-100 border-2 ${classnameIcon} rounded-xl border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl text-white"> {icon_4} </div>
          </div>
          <div
            className={`bg-base-100 ${classnameIconB} border-2 rounded-xl border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl text-purple-500">{icon_5}</div>
          </div>
        </div>
        <div className="absolute bottom-5 right-3 card-actions">
          <a href={link_github} rel="noopener noreferrer" target="_blank">
            <Button
              classname={
                "bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105 hover:transition-all hover:duration-300"
              }
              text={<FaGithub className="text-2xl text-black" />}
            />
          </a>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <Button
              classname={
                "bg-orange-500 text-black hover:bg-orange-400 hover:scale-105 hover:transition-all hover:duration-300"
              }
              text={<FaEye className="text-2xl text-black" />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
