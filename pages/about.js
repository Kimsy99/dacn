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
    <>
      <Hero title="About Us" />
      <div className="mx-auto divide-y">
        <div className="py-16">
          <SecHeader title={"The Team"} />
          <CardWrapper data={data} />
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Vision & Mission"} />
          <VisionMission />
        </div>
        <div className="py-16">
          <SecHeader title={"What We Do"} />
          <Infographics>
            <div className="w-11/12 self-center">
              <p>
                Student Consultants from data science and business majors will
                be selected from a <b>vigorous application process</b>. They
                will provide businesses with customized data solutions under the
                guidance of industry professionals.
              </p>
              <p>
                The deliverables by student consultants will be vetted by:
                <ol className="list-decimal">
                  <li>
                    DACN committee members working in Intel, Accenture, Khazanah
                    and more
                  </li>
                  <li>
                    Mentors working as industry professionals at Accenture
                  </li>
                </ol>
              </p>
            </div>
          </Infographics>
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Our Ecosystem"} className="max-w-screen-xl" />
        </div>
        <div className="py-16">
          <SecHeader title={"Student Ambassors"} />
          <CardWrapper data={ambassador} className="max-w-screen-xl" />
        </div>
      </div>
    </>
  );
};

export default About;
