import React from "react";
import Image from "next/image";

const Infographics = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10">
      <div className="w-11/12 self-center">
        <Image
          src="/infographics/what-we-do.png"
          alt="What we do"
          layout="intrinsic"
          width={470}
          height={571.56321838}
        />
      </div>
      {children}
    </div>
  );
};

export default Infographics;
