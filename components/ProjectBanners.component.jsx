import React from "react";
import ProjectBannerCard from "./ProjectBannerCard.component";
const data = [
  {
    id: 1,
    name: "Cafe Sales Analysis",
    description:
      "Problem Statement: What’s the best commission scheme we can give our staff to improve sales?",
  },
  {
    id: 2,
    name: "Survey Analysis - Zero Waste Malaysia",
    description:
      "Problem Statement: To derive the % of Malaysians with misconcpetion of trash, waste separation and composting behaviour in households from public survey.",
  },
];
const ProjectBanners = () => {
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
