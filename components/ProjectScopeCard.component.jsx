import Image from "next/image";
import React from "react";

const ProjectScopeCard = (props) => {
  const { icon, title, content } = props;
  return (
    <div className="flex flex-col items-center justify-center bg-white p-5 shadow-xl rounded-lg max-w-sm content-start project-scope-card">
      <Image src={icon} alt="" width={85} height={85} />
      {title && (
        <p className="text-center font-bold text-lg text-white my-2">{title}</p>
      )}

      <p className="text-center text-white">{content}</p>
    </div>
  );
};

export default ProjectScopeCard;
