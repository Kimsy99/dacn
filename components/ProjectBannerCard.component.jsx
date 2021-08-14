import React from "react";

const ProjectBannerCard = ({ name, desc, id }) => {
  let odd = id % 2;
  return (
    <>
      {odd ? (
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 justify-items-center bg-local  image-bg-1">
          <div className="order-last bg-white bg-opacity-50	p-10 align-middle flex flex-col items-center justify-center h-full image-banner">
            <p className="font-bold w-full sm:text-2xl text-xl mb-5">{name}</p>
            <p>{desc}</p>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 justify-items-center bg-local image-bg-1">
          <div></div>
          <div className="order-first bg-white bg-opacity-50	p-10 align-middle flex flex-col items-center justify-center h-full image-banner">
            <p className="font-bold w-full sm:text-2xl text-xl mb-5">{name}</p>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBannerCard;
