import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 justify-items-center bg-local  image-bg-1">
        <div className="order-first bg-white bg-opacity-50	p-10 align-middle flex flex-col items-center justify-center h-full image-banner">
          <p className="font-bold w-full sm:text-2xl text-xl mb-5">
            Be a client today
          </p>
          <ul>
            <li>Get customised data analytics projects</li>
            <li>Build dashboards to optimise cost and revenues</li>
            <li>
              Leverage on talented students to improve your data readiness
            </li>
          </ul>
        </div>
        <div>
          <p>Be a client today</p>
          <ul>
            <li>Get customised data analytics projects</li>
            <li>Build dashboards to optimise cost and revenues</li>
            <li>
              Leverage on talented students to improve your data readiness
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 justify-items-center bg-local image-bg-1">
        <div>
          <p>Be a client today</p>
        </div>
        <div className="order-last bg-white bg-opacity-50	p-10 align-middle flex flex-col items-center justify-center h-full image-banner">
          <p className="font-bold w-full sm:text-2xl text-xl mb-5">name</p>
          <p>des</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
