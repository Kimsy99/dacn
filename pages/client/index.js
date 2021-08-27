import Image from "next/image";
import Head from "next/head";
import React from "react";
import Hero from "../../components/Hero.component";
import ProjectScopeCard from "../../components/ProjectScopeCard.component";
import SecHeader from "../../components/SecHeader.component";
import Faq from "../../components/faq.component";
import Link from "next/link";
const data = [
  {
    id: 1,
    icon: "/icons/real-world-exp.svg",
    content:
      "Real-world project experience that helps students build their portfolio and enhance their employability",
  },
  {
    id: 2,
    icon: "/icons/connect.svg",
    content:
      "The opportunity to connect with data science industry professionals and like-minded students",
  },
  {
    id: 3,
    icon: "/icons/softskills.svg",
    content:
      "Develop crucial soft skills such as teamwork, business acumen and communication skills",
  },
];
const Client = () => {
  return (
    <>
      <Head>
        <title>DACN Clients</title>
        <meta
          name="description"
          content="Clients | Data Analytics Consultancy Network"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="For Clients" />
      <div className="mx-auto divide-y">
        <div className=" mx-auto max-w-screen-xl py-16">
          <div className="sm:flex sm:justify-center ">
            <div className="text-center mb-10">
              <div className="rounded-md ">
                <a
                  className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md home-btn-3 md:py-4 md:text-lg md:px-10 hover:ring-4 "
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf1lryksJMNF5E0crApRz-QYJnqBkB2mUVEhUwPxIEIcoqw6A/viewform"
                  target="__blank"
                >
                  SIGN UP AS A CLIENT NOW
                </a>
              </div>
            </div>
          </div>
          <SecHeader title="Our Value Add" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl mx-auto">
            {data.map((obj) => {
              return (
                <ProjectScopeCard
                  key={obj.id}
                  icon={obj.icon}
                  content={obj.content}
                />
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title="On-boarding Process" />
          <div className="mx-auto max-w-screen-md">
            <Faq />
          </div>
          <div className=" mt-5 sm:flex sm:justify-center ">
            <div className="text-center mb-10">
              <div className="rounded-md shadow">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md home-btn-3 md:py-4 md:text-lg md:px-10 hover:ring-4 "
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf1lryksJMNF5E0crApRz-QYJnqBkB2mUVEhUwPxIEIcoqw6A/viewform"
                  target="__blank"
                >
                  SIGN UP AS A CLIENT NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
