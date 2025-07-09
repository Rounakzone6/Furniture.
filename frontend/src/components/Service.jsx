import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { features } from "../assets";

const Service = () => {
  return (
    <div className="flex justify-around items-start py-4 md:text-center flex-col md:flex-row">
      {features.map((item, index) => (
        <div key={index} className="flex gap-4 justify-center items-center">
          <FontAwesomeIcon icon={item.img} className="text-2xl" />
          <div>
            <p className="text-md">{item.title}</p>
            <p className="text-xs">{item.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
