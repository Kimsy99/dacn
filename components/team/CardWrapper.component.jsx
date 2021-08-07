import React from "react";
import Card from "./Card.component";

const CardWrapper = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mx-auto w-8/12 my-10">
      {data.map((obj) => {
        return (
          <Card
            key={obj.id}
            name={obj.name}
            image={obj.image}
            position={obj.position}
            details={obj.details}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
