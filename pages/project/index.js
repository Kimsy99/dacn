import React from "react";
import Hero from "../../components/Hero.component";
import ProjectScope from "../../components/ProjectScope.component";
import SecHeader from "../../components/SecHeader.component";

const Project = () => {
  return (
    <div>
      <Hero title="DACN Projects" />
      <SecHeader title={"What we offer"} />
      <ProjectScope />
      <SecHeader title={"Project Showcase"} />
    </div>
  );
};

export default Project;
