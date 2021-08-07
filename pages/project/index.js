import React from "react";
import Hero from "../../components/Hero.component";
import ProjectScope from "../../components/ProjectScope.component";
import SecHeader from "../../components/SecHeader.component";

const Project = () => {
  return (
    <>
      <Hero title="DACN Projects" />
      <div className="mx-auto divide-y">
        <div className="py-16">
          <SecHeader title={"What we offer"} className="max-w-screen-xl" />
          <ProjectScope className="max-w-screen-xl" />
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Project Showcase"} />
        </div>
      </div>
    </>
  );
};

export default Project;
