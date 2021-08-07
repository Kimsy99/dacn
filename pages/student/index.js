import React from "react";
import Hero from "../../components/Hero.component";
import ProjectScope from "../../components/ProjectScope.component";
import ProjectScopeCard from "../../components/ProjectScopeCard.component";
import SecHeader from "../../components/SecHeader.component";
const data = [
  {
    id: 1,
    icon: "/icons/real-world-exp.svg",
    title: "Real World Experience",
    content:
      "Real-world project experience that helps students build their portfolio and enhance their employability",
  },
  {
    id: 2,
    icon: "/icons/connect.svg",
    title: "Network Building",
    content:
      "The opportunity to connect with data science industry professionals and like-minded students",
  },
  {
    id: 3,
    icon: "/icons/softskills.svg",
    title: "Soft Skills Enhancement",
    content:
      "Develop crucial soft skills such as teamwork, business acumen and communication skills",
  },
];
const Student = () => {
  return (
    <>
      <Hero title="For Students" />
      <div className="mx-auto divide-y">
        <div className="py-16 mx-auto max-w-screen-xl ">
          <SecHeader title={"Our Value Add for you"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10">
            {data.map((obj) => {
              return (
                <ProjectScopeCard
                  key={obj.id}
                  icon={obj.icon}
                  title={obj.title}
                  content={obj.content}
                />
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 py-16">
          <SecHeader title={"Student Consultants"} />
          <p className="max-w-screen-xl mx-auto w-auto text-center text-2xl font-light">
            Stay tuned... Coming Soon
          </p>
        </div>
        <div className=" py-16">
          <SecHeader title={"Our Student Ambassadors"} />
          <p className="max-w-screen-xl mx-auto w-auto text-center text-2xl font-light">
            Stay tuned... Coming Soon
          </p>
        </div>
      </div>
    </>
  );
};

export default Student;
