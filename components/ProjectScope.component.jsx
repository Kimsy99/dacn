import React from "react";
import ProjectScopeCard from "./ProjectScopeCard.component";
const data = [
  {
    id: 1,
    icon: "/icons/dataclean.svg",
    title: "Data Aggregation and Cleaning",
    content:
      "We consolidate our client’s data points into an integrated spreadsheet, and provide feedback on how to improve their data readiness!",
  },
  {
    id: 2,
    icon: "/icons/dashboardcreation.svg",
    title: "Dashboard Creation and Analysis",
    content:
      "By presenting the data on a live dashboard, we perform in-depth analysis to help realize our client’s revenue potential and optimise costs.",
  },
  {
    id: 3,
    icon: "/icons/technicalmodel.svg",
    title: "Technical Model/eCommerce set-up",
    content:
      "We can provide further services - additional technical model analysis or a basic eCommerce set-up!",
  },
];
const ProjectScope = () => {
  return (
    <div className="mx-2 max-w-screen-xl mx-auto">
      <p className="text-center">
        DACN helps clients answer customised <b>problem statements</b> through
        data-driven solutions. We provide value to clients through{" "}
        <b>live dashboard creation, final recommendation presentation</b> and a{" "}
        <b>technical model/ eCommerce set-up.</b>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mx-auto w-8/12 my-10">
        {data.map((obj) => {
          return (
            <ProjectScopeCard
              key={obj.id}
              icon={obj.icon}
              title={obj.title}
              content={obj.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectScope;
