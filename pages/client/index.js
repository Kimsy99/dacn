import Image from "next/image";
import React from "react";
import Hero from "../../components/Hero.component";
import ProjectScopeCard from "../../components/ProjectScopeCard.component";
import SecHeader from "../../components/SecHeader.component";
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
    <div>
      <Hero title="For Clients" />
      <SecHeader title="Our Value Add" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10">
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
      <SecHeader title="On-boarding Process" />
      <div className="mx-5">
        <Image
          src="/infographics/on-boarding-process.png"
          alt="On-boarding process"
          layout="intrinsic"
          height={906}
          width={1498}
        />
      </div>
    </div>
  );
};

export default Client;
