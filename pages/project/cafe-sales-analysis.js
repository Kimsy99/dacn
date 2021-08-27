import React from "react";
import Slideshow from "../../components/HomeSlideShow.component";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
const images = [
  { url: "/showcase/cafe-sales/ABC-1.png" },
  { url: "/showcase/cafe-sales/ABC-2.png" },
];
const CafeSales = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-3xl font-bold w-full text-center mx-5">
          Project Showcase 1 - Cafe Sales Analytics
        </p>
        <p className="w-full text-center italic my-10 mx-5">
          ABC Cafe (not real name to protect the privacy of our client) wanted
          to launch a new commission scheme to motivate salesment to up their
          sales during MCO 3.0 in May 2021
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
            {" "}
            What’s the best commission scheme we can give our staff to improve
            sales?
          </b>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
            <h1 className="sm:text-2xl text-xl font-medium">Our Process</h1>
            <ol className="list-decimal list-outside mx-4">
              <li>Data collection (Point-of-Sales System)</li>
              <li>
                Data cleaning, transformation sequence and dashboard creation
              </li>
              <li>
                Dashboard Analysis:
                <ol className="list-disc list-inside">
                  <li className="indent">Sales by product, by staff</li>
                  <li className="indent">Product cost and gross margins</li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
            <h1 className="sm:text-2xl text-xl font-medium">
              Final Recommendation
            </h1>
            <br />
            <p className="text-center">
              To provide bonuses to employees only when an employees’ sales
              amount has achieved a minimum threshold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeSales;
