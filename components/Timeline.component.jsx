import Image from "next/image";
import React, { useState } from "react";
function Timeline() {
  const [question, setquestion] = useState(0);
  return (
    <>
      <div className="container mx-auto">
        {/* <div className="text-center pb-3 md:pb-10 xl:pb-20">
          <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">
            start with the basics
          </p>
          <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h1>
        </div> */}
        <div className="w-10/12 mx-auto">
          <ul>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-bold md:text-md  xl:text-lg w-10/12 ">
                  Month 1 - Data Consolidation and Cleaning
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 0 ? setquestion(null) : setquestion(0)
                  }
                >
                  {question === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 0 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 text-sm md:text-base  xl:text-md rounded-b-lg">
                  <p className="font-bold">Key Milestones: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>Handover of all key datasets.</li>
                    <li>Completed data cleaning procedure</li>
                    <li>
                      Presentation on suggestions for improving Clients Data
                      Readiness
                    </li>
                  </ol>
                  <br />
                  <p className="font-bold">Key Meetings: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>
                      Week 1: Introduction and deliverables confirmation/
                      clarification
                    </li>
                    <li>Week 4: Data Readiness feedback presentation</li>
                  </ol>
                  <br />
                  <p className="font-bold">Objective: </p>
                  <ol className="list-disc	list-inside	">
                    <li>Assess data readiness</li>
                    <li>Aggregation of data systems and data cleaning</li>
                  </ol>
                  <br />
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-bold md:text-md  xl:text-lg w-10/12 ">
                  Month 2 - Dashboard Creation, Analysis (and the completion of
                  other services)
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 1 ? setquestion(null) : setquestion(1)
                  }
                >
                  {question === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 1 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-sm md:text-base  xl:text-md rounded-b-lg">
                  <p className="font-bold">Key Milestones: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>Dashboard creation</li>
                    <li>Delivery of additional agreed services</li>
                    <li>Final Presentation on Deliverables and Suggestions</li>
                  </ol>
                  <br />
                  <p className="font-bold">Key Meetings: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>Week 6: Dashboard insights meeting</li>
                    <li>Week 8: Final Recommendation Presentation</li>
                  </ol>
                  <br />
                  <p className="font-bold">Objective: </p>
                  <ol className="list-disc	list-inside	">
                    <li>Presentation of data</li>
                    <li>
                      Draw insights from data and troubleshoot any missing
                      values/ issues with clients
                    </li>
                    <li>Make recommendation for business question</li>
                  </ol>
                  <br />
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-bold md:text-md  xl:text-lg w-10/12 ">
                  Month 3 - Final Recommendation and Knowledge Handover
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 2 ? setquestion(null) : setquestion(2)
                  }
                >
                  {question === 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 2 && (
                <p className="pt-2 md:pt-3  lg:pt-5 text-sm md:text-base  xl:text-md rounded-b-lg">
                  <p className="font-bold">Key Milestones: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>Handback all key datasets</li>
                    <li>Knowledge handover</li>
                  </ol>
                  <br />
                  <p className="font-bold">Key Meetings: </p>
                  <ol className="list-decimal	list-inside	">
                    <li>
                      Week 9: Handover of dashboard and knowledge transfer
                    </li>
                    <li>
                      Week 9: Handover of dashboard and knowledge transfer
                    </li>
                  </ol>
                  <br />
                  <p className="font-bold">Objective: </p>
                  <ol className="list-disc		list-inside	">
                    <li>
                      Transfer of knowledge and students to troubleshoot issues
                      faced by clients
                    </li>
                  </ol>
                  <br />
                </p>
              )}
            </li>
          </ul>
          <br />
          <p className="text-center">
            Our typical project lasts{" "}
            <span className="font-bold text-red-500	">two</span> to{" "}
            <span className="font-bold text-blue-400">three</span> months
            depending on our client’s needs. Two month projects condenses the
            first two month’s work into one month (only possible where the
            client’s data readiness is sufficiently robust). For more
            information on data readiness, kindly refer to the table below:
          </p>
          <br />
          <div className="w-12/12">
            <Image
              class="mx-auto"
              src="/infographics/project-timeline-table.jpg"
              alt="What we do"
              layout="intrinsic"
              width={732}
              height={302}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
