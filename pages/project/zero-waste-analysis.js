import React from "react";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
const images = [
  { url: "/showcase/zero-waste/ZWM-1.png" },
  { url: "/showcase/zero-waste/ZWM-2.png" },
  { url: "/showcase/zero-waste/ZWM-3.png" },
];
const ZeroWaste = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-3xl font-bold w-full text-center mx-5">
          Project Showcase 2 - Survey Analysis for Zero Waste Malaysias
        </p>
        <p className="w-full text-center italic my-10 mx-5">
          Zero Waste Malaysia recently launched a public survey to guage the
          public’s behaviours involving household waste. This was a preliminary
          analysis of their first 4000 survey responses.
        </p>
        <div className="mx-auto w-max md:block hidden">
          <Slider imageList={images} width={1000} height={559} />
        </div>
        <div className="mx-auto w-max md:hidden block">
          <Slider imageList={images} width={400} height={223} />
        </div>
        <p className="w-full text-center italic my-10 mx-5">
          Problem Statement:{" "}
          <b>
            To derive the following key results from the public survey;
            <ul className="list-disc list-inside">
              <li className="indent">
                % of Malaysians with misconception on trash Waste
              </li>
              <li className="indent">
                Separation and Composting behaviour in households
              </li>
            </ul>
          </b>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
            <h1 className="sm:text-2xl text-xl font-medium">Our Process</h1>
            <ol className="list-decimal list-outside mx-4">
              <li>
                Data cleaning (coded open-ended questions, streamlined answers
                from the 3 languages, created summary tables)
              </li>
              <li>Dashboard Creation</li>
              <li>Data Analysis</li>
            </ol>
          </div>
          <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
            <h1 className="sm:text-2xl text-xl font-medium">
              Final product: 6 panels
            </h1>
            <br />
            <p className="text-center">
              (only 2 out of the 6 is displayed here – the rest belongs to Zero
              Waste Malaysia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroWaste;
