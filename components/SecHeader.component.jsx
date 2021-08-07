import React from "react";

const SecHeader = ({ title }) => {
  return (
    <div className="grid items-center gap-0 mx-2 my-10 rounded-lg h-10 place-content-center ">
      <h1 className="sm:text-3xl text-xl justify-self-start font-bold">
        {title}
      </h1>
    </div>
  );
};

export default SecHeader;
