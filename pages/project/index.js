import React from "react";
import Head from "next/head";
import Hero from "../../components/Hero.component";
import ProjectScope from "../../components/ProjectScope.component";
import SecHeader from "../../components/SecHeader.component";
import Faq from "../../components/faq.component";
import ProjectBanners from "../../components/ProjectBanners.component";
import Timeline from "../../components/Timeline.component";
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
const Project = () => {
  return (
    <>
      <Head>
        <title>DACN Projects</title>
        <meta
          name="description"
          content="Students | Data Analytics Consultancy Network"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="DACN Projects" />
      <div className="mx-auto divide-y">
        <div className="py-16">
          <SecHeader title={"What we offer"} className="max-w-screen-xl" />
          <ProjectScope className="max-w-screen-xl" />
        </div>
        <div className="bg-gray-50 py-16" id="showcase">
          <SecHeader title={"Project Showcase"} />
          <ProjectBanners data={data} />
        </div>
        <div className="py-16" id="timeline">
          <SecHeader title={"Project Timeline"} />
          <Timeline />
        </div>
        <div className="bg-gray-50 py-16 px-16 text-center" id="team">
          <SecHeader title={"Project Team"} />
          <p>
            Each project will be delivered in full by out Student Consultants,
            picked through a vigorous application process. All output will be
            vetted by DACN’s Committee and Industry Mentors.
          </p>
          <br />
          <p>
            Each project team will have two Data Analysts and one Business
            Analyst.
          </p>
          <br />
          <p className="font-bold">
            DETAILS ON OUR STUDENT CONSULTANTS AND INDISTRY MENTORS COMING SOON
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
