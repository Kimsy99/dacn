import React from "react";
import Head from "next/head";
import Hero from "../../components/Hero.component";
import ProjectScope from "../../components/ProjectScope.component";
import SecHeader from "../../components/SecHeader.component";
import Faq from "../../components/faq.component";
import ProjectBanners from "../../components/ProjectBanners.component";

const Project = () => {
  return (
    <>
      <Head>
        <title>DACN Projects</title>
        <meta name="description" content="Data Analytics Consultancy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="DACN Projects" />
      <div className="mx-auto divide-y">
        <div className="py-16">
          <SecHeader title={"What we offer"} className="max-w-screen-xl" />
          <ProjectScope className="max-w-screen-xl" />
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Project Showcase"} />
          <ProjectBanners />
        </div>
      </div>
    </>
  );
};

export default Project;
