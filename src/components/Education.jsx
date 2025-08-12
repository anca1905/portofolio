import React from "react";

const EducationLayout = (props) => {
  const { title, description, description2 } = props;
  return (
    <div className="my-2 md:my-1 text-lg md:text-xl p-4 h-full">
      {title}
      <div className="text-sm font-bold text-orange-500 my-1">
        {description2}
      </div>
      <p className="text-sm mt-1 text-neutral-500">{description}</p>
    </div>
  );
};

export default EducationLayout;
