import React, { useState } from "react";
function Faq() {
  const [question, setquestion] = useState();
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
                  Stage 1 - Preliminary Meetings with the DACN Committee
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
                  <ol className="list-decimal	list-inside	">
                    <li>
                      After filling in our{" "}
                      <a
                        className="underline cursor-pointer"
                        href="https://forms.gle/qcTjFms9dFDXnjjH9"
                      >
                        short interest form
                      </a>{" "}
                      or emailing dacn.malaysia@gmail.com, our team will reach
                      out to you for a short 30minute meeting to better
                      understand your goals and how we can fit in
                    </li>
                    <li>
                      You will be sent further information on how DACN works,
                      and have the opportunity to ask any questions you may have
                    </li>
                    <li>
                      We will conduct a preliminary data readiness survey with
                      you to see if your data readiness falls in our current
                      scope of capabilities. This can be found here
                    </li>
                  </ol>
                  <br />
                  <p>
                    We may have further meetings with you if the situation
                    requires before moving to Stage 2
                  </p>
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-bold md:text-md  xl:text-lg w-10/12 ">
                  Stage 2 - Problem Statement Determination and Agreement of
                  Deliverables
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
                  From our preliminary meetings, our team at DACN will draft a
                  more formal problem statement and outline our deliverables to
                  you.
                  <br />
                  From here, you will have the chance to add or amend any
                  deliverables from DACN (and from your end) before signing our
                  Agreement Confirmation
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 font-bold md:text-md  xl:text-lg w-10/12 ">
                  Stage 3 - Signing of our Agreement Confirmation
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
                  Once the problem statement and deliverables are agreed upon,
                  we invite you to sign our Agreement Confirmation.
                  <br />
                  After this, DACN’s project with you will begin as outlined in
                  this Confirmation. This year, 2021, projects will begin on the
                  6th of September 2021.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faq;
