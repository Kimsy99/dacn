import React from "react";

const VisionMission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
        <h1 className="sm:text-2xl text-xl font-medium">Vision</h1>
        <p>
          To build a fully digitized, data-driven business environment in
          Malaysia from the ground up
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg max-w-sm content-start">
        <h1 className="sm:text-2xl text-xl font-medium">Mission</h1>
        <p>
          To spearhead the use of data analytics of local businesses by
          connecting students passionate about data science to local businesses
          seeking data science services
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
