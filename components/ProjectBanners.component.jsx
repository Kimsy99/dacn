import React from "react";
import ProjectBannerCard from "./ProjectBannerCard.component";

const ProjectBanners = ({ data }) => {
  return (
    <div>
      {data.map((obj) => {
        return (
          <ProjectBannerCard
            key={obj.key}
            id={obj.id}
            desc={obj.description}
            name={obj.name}
          />
        );
      })}
    </div>
  );
};

export default ProjectBanners;
