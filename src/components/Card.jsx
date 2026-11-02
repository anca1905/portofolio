import React from "react";
import Button from "./Button";
import { FaEye, FaGithub } from "react-icons/fa";

const Card = (props) => {
  const {
    img,
    classname = "",
    classnameIcon = "",
    classnameIconB = "",
    classnameIconT = "",
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
      className={`card card-compact bg-white dark:bg-neutral-900 w-72 my-2 ${classname} mx-auto shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300`}
    >
      <figure className="bg-slate-100 dark:bg-neutral-800 overflow-hidden">
        <img src={img} alt={title || "Project preview"} className="w-full h-44 object-cover" />
      </figure>
      <div className="relative card-body bg-white dark:bg-neutral-900 h-full rounded-b-2xl">
        <h2 className="card-title text-xl md:text-2xl text-slate-800 dark:text-white">{title}</h2>
        <div className="border-b border-slate-200 dark:border-slate-800 h-36 text-slate-600 dark:text-neutral-400 pb-5 text-sm leading-relaxed">
          <p>{description}</p>
        </div>
        <div className="flex-wrap flex gap-2 justify-center items-center my-2">
          <div className="bg-slate-100 dark:bg-base-100 border-2 rounded-xl border-slate-200 dark:border-slate-800 px-2 py-1">
            <div className="text-4xl md:text-3xl text-orange-400">{icon}</div>
          </div>
          <div
            className={`bg-slate-100 dark:bg-base-100 border-2 ${classnameIconT} rounded-xl border-slate-200 dark:border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl text-cyan-400">{icon_2}</div>
          </div>
          <div className="bg-slate-100 dark:bg-base-100 border-2 rounded-xl border-slate-200 dark:border-slate-800 px-2 py-1">
            <div className="text-4xl md:text-3xl text-yellow-300">{icon_3}</div>
          </div>
          <div
            className={`bg-slate-100 dark:bg-base-100 border-2 ${classnameIcon} rounded-xl border-slate-200 dark:border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl text-slate-800 dark:text-white">{icon_4}</div>
          </div>
          <div
            className={`bg-slate-100 dark:bg-base-100 ${classnameIconB} border-2 rounded-xl border-slate-200 dark:border-slate-800 px-2 py-1`}
          >
            <div className="text-4xl md:text-3xl text-purple-500">{icon_5}</div>
          </div>
        </div>
        <div className="absolute bottom-5 right-3 card-actions">
          {link_github && (
            <a href={link_github} rel="noopener noreferrer" target="_blank" aria-label="GitHub Repository">
              <Button
                classname="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full hover:scale-105 transition-all duration-300"
                text={<FaGithub className="text-xl text-white" />}
              />
            </a>
          )}

          {link && link !== "/" && (
            <a href={link} rel="noopener noreferrer" target="_blank" aria-label="Live Demo">
              <Button
                classname="bg-orange-500 text-white hover:bg-orange-400 hover:scale-105 transition-all duration-300"
                text={<FaEye className="text-xl text-white" />}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
