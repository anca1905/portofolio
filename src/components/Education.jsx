import React from "react";

const Education = (props) => {
  const { title, description, description2 } = props;
  return (
    <div className="my-2 md:my-1 text-lg md:text-xl p-4 h-full">
      <div className="font-semibold text-slate-800 dark:text-neutral-100">{title}</div>
      <div className="text-sm font-bold text-orange-500 my-1">
        {description2}
      </div>
      <p className="text-sm mt-1 text-slate-600 dark:text-neutral-400">{description}</p>
    </div>
  );
};

export default Education;
