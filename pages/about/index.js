import React from "react";
import Head from "next/head";
import Hero from "../../components/Hero.component";
import Infographics from "../../components/Infographics.component";
import SecHeader from "../../components/SecHeader.component";
import CardWrapper from "../../components/team/CardWrapper.component";
import VisionMission from "../../components/VisionMission.component";
import ProjectScopeCard from "../../components/ProjectScopeCard.component";
let data = [
  {
    id: 1,
    image: "/Committee/Wen-Lynn.jpg",
    name: "Wee Lynn Lee",
    position: "Co-Founder",
    details: "London School of Economics, BSc Politics and Economics",
  },
  {
    id: 2,
    image: "/Committee/Pearlyn.jpg",
    name: "Tan Puay Leng",
    position: "Co-Founder",
    details: "London School of Economics, LLB Bachelor of Law",
  },
  {
    id: 3,
    image: "/Committee/Kate.jpg",
    name: "Kate Ng",
    position: "Corporate Relations Director",
    details: "Monash University, BA Social Science",
  },
  {
    id: 4,
    image: "/Committee/Alex.jpg",
    name: "Alex Shai Zhi Xuan",
    position: "Student Outreach Director",
    details: "Universiti Teknologi Petronas, BSc Information Technology",
  },
  {
    id: 5,
    image: "/Committee/OZY.jpg",
    name: "Ooi Zhi Yang",
    position: "Data Science Director",
    details: "Heriot-Watt Univesity, BSc Statistical Data Science",
  },
  {
    id: 6,
    image: "/Committee/Wei-Han.jpg",
    name: "Ng Wei Han",
    position: "Data Science Director",
    details: "Monash Univerity, BSc Computer Science",
  },
];
let ambassador = [
  {
    id: 1,
    image: "/ambassador/Ainun.png",
    name: "Ainun Mardziah bt Abdul Halim",
    position: "University Teknologi Petronas",
    details: "Bachalor of Business Management",
  },
  {
    id: 2,
    image: "/ambassador/Boon Kit.png",
    name: "Gan Book Kit",
    position: "Universiti Putra Malaysia",
    details: "BSc Statistics",
  },
  {
    id: 3,
    image: "/ambassador/Essien.png",
    name: "Heng Yi Sheng",
    position: "Asiia Pacific University",
    details: "Bachalor of C.S (Data Analytics)",
  },
  {
    id: 4,
    image: "/ambassador/Kannan.png",
    name: "Kennan Ravinther",
    position: "Multimedia University (MMU)",
    details: "Bachalor of IT (Hons)",
  },
  {
    id: 5,
    image: "/ambassador/Kim.png",
    name: "Kim Sheng Yong",
    position: "Xiamen University Malaysia",
    details: "BEng Software Engineering",
  },
  {
    id: 6,
    image: "/ambassador/Xue Fu.png",
    name: "Leong Xue Fu",
    position: "Inti International College Subang",
    details: "BSc Information Systems",
  },
  {
    id: 7,
    image: "/ambassador/Richie.png",
    name: "Teo Richie",
    position: "Universiti Malaya",
    details: "Bachalor of Comp Sci (Info Sys.)",
  },
  {
    id: 8,
    image: "/ambassador/Kah Hoe.png",
    name: "Yong Kah Hoe",
    position: "Sunway University",
    details: "Bachalor of IT (Cyber Security)",
  },
];
const ecosystem = [
  {
    id: 1,
    icon: "/icons/real-world-exp.svg",
    content:
      "We help local businesses enhance business performance through the use of data analytics",
  },
  {
    id: 2,
    icon: "/icons/empower.svg",
    content:
      "We empower students with exceptional data skills to work on real-world projects",
  },
  {
    id: 3,
    icon: "/icons/softskills.svg",
    content:
      "Ultimately, we bridge the digitisation gap by leveraging on uprising talents to inclusively embrace Industry 4.0",
  },
];
const About = () => {
  return (
    <>
      <Head>
        <title>About DACN</title>
        <meta
          name="description"
          content="Clients | Data Analytics Consultancy Network"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="About Us" />
      <div className="mx-auto divide-y" id="who-we-are">
        <div className="py-16 mx-auto max-w-screen-xl">
          <SecHeader title={"The Team"} />
          <CardWrapper data={data} />
        </div>
        <div className="bg-gray-50 py-16" id="what-we-do">
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
                  <li className="list-outside">
                    DACN committee members working in Intel, Accenture, Khazanah
                    and more
                  </li>
                  <li className="list-outside">
                    Mentors working as industry professionals at Accenture
                  </li>
                </ol>
              </p>
            </div>
          </Infographics>
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Our Ecosystem"} className="max-w-screen-xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl mx-auto">
            {ecosystem.map((obj) => {
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
        <div className="py-16" id="ambassadors">
          <SecHeader title={"Student Ambassors"} />
          <CardWrapper data={ambassador} className="max-w-screen-xl" />
        </div>
      </div>
    </>
  );
};

export default About;
