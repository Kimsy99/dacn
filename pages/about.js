import React from "react";
import Hero from "../components/Hero.component";
import Infographics from "../components/Infographics.component";
import SecHeader from "../components/SecHeader.component";
import CardWrapper from "../components/team/CardWrapper.component";
import VisionMission from "../components/VisionMission.component";
let data = [
  {
    id: 1,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "Co-Founder",
    details: "London School of Economics, BSc Politics and Economics",
  },
  {
    id: 2,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "Co-Founder",
    details: "London School of Economics, BSc Politics and Economics",
  },
  {
    id: 3,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "Co-Founder",
    details: "London School of Economics, BSc Politics and Economics",
  },
];
let ambassador = [
  {
    id: 1,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "University of ___",
    details: "Bachalor in Science",
  },
  {
    id: 2,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "University of ___",
    details: "Bachalor in Science",
  },
  {
    id: 3,
    image: "/blacklogo-transbackground.png",
    name: "Wee Lynn Lee",
    position: "University of ___",
    details: "Bachalor in Science",
  },
];
const About = () => {
  return (
    <div>
      <Hero title="About Us" />
      <SecHeader title={"The Team"} />
      <CardWrapper data={data} />
      <SecHeader title={"Vision & Mission"} />
      <VisionMission />
      <SecHeader title={"What We Do"} />
      <Infographics>
        <div className="w-11/12 self-center">
          <p>
            Student Consultants from data science and business majors will be
            selected from a <bold>vigorous application process</bold>. They will
            provide businesses with customized data solutions under the guidance
            of industry professionals.
          </p>
          <p>
            The deliverables by student consultants will be vetted by:
            <ol className="list-decimal">
              <li>
                DACN committee members working in Intel, Accenture, Khazanah and
                more
              </li>
              <li>Mentors working as industry professionals at Accenture</li>
            </ol>
          </p>
        </div>
      </Infographics>
      <SecHeader title={"Our Ecosystem"} />
      <SecHeader title={"Student Ambassors"} />
      <CardWrapper data={ambassador} />
    </div>
  );
};

export default About;
