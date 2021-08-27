import React from "react";
import Slideshow from "../../components/HomeSlideShow.component";

const CafeSales = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <p>Project Showcase 1 - Cafe Sales Analytics</p>
        <p>
          ABC Cafe (not real name to protect the privacy of our client) wanted
          to launch a new commission scheme to motivate salesment to up their
          sales during MCO 3.0 in May 2021
        </p>
        <p>
          Problem Statement:{" "}
          <b>
            {" "}
            What’s the best commission scheme we can give our staff to improve
            sales?
          </b>
        </p>
        <p>Our process:</p>
        <ol>
          <li>Data collection (Point-of-Sales System)</li>
          <li>Data cleaning, transformation sequence and dashboard creation</li>
          <li>
            Dashboard Analysis:
            <ol>
              <li>Sales by product, by staff</li>
              <li>b) Product cost and gross margins</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CafeSales;
