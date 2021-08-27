import React from "react";
import Image from "next/image";
const Card = ({ name, image, position, details }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg w-60 content-start">
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        {/* <img src={image} alt="" className="object-cover h-full w-full" /> */}
        <Image
          src={image}
          className="object-cover h-full w-full"
          alt="DACN Logo"
          width={200}
          height={200}
        />
      </div>

      <h2 className="mt-4 font-bold text-xl text-center">{name}</h2>
      <h6 className="mt-2 text-sm font-medium text-center">{position}</h6>

      <p className="text-xs text-gray-500 text-center mt-3">{details}</p>
    </div>
  );
};

export default Card;
