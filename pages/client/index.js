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
    <>
      <Hero title="For Clients" />
      <div className="mx-auto divide-y">
        <div className=" mx-auto max-w-screen-xl py-16">
          <SecHeader title="Our Value Add" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl mx-auto">
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
            <Image
              src="/infographics/on-boarding-process.png"
              alt="On-boarding process"
              layout="intrinsic"
              height={906}
              width={1498}
            />
          </div>
        </div>
        <div className="py-16">
          <SecHeader title="How We Compare" />
          <div className="mx-auto max-w-screen-md">
            <Image
              src="/infographics/how-we-compare.png"
              alt="How we compare"
              layout="intrinsic"
              height={1034}
              width={1602}
            />
            <span className="text-red-500">
              *
              <i className="text-center text-black">
                Note: in 2021, our projects will all be on a probono basis.
              </i>
            </span>
          </div>
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title="Fee Structure" />
          <div className="mx-auto max-w-screen-md">
            <Image
              src="/infographics/feemodel.png"
              alt="How we compare"
              layout="intrinsic"
              height={1034}
              width={1602}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
