import React from "react";
import assets, { chairs, lightings, sofas, tables } from "../assets";

const CategoriesHover = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex md:flex-row justify-between gap-4 w-[90vw] md:w-[60vw] max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-3xl p-4">
        <div>
          <p className="font-medium mb-4">Home Furniture</p>
          <ul className="flex flex-col gap-2">
            {chairs.map((item, index) => (
              <li
                key={index}
                className="text-[10px] md:text-sm mt-1 hover:text-gray-500 hover:underline cursor-pointer text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium mb-4">Office Furniture</p>
          <ul className="flex flex-col gap-2">
            {sofas.map((item, index) => (
              <li
                key={index}
                className="text-[10px] md:text-sm mt-1 hover:text-gray-500 hover:underline cursor-pointer text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium mb-4">Outdoor Furniture</p>
          <ul className="flex flex-col gap-2">
            {lightings.map((item, index) => (
              <li
                key={index}
                className="text-[10px] md:text-sm hover:text-gray-500 mt-1 hover:underline cursor-pointer text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium mb-4">Outdoor Furniture</p>
          <ul className="flex flex-col gap-2">
            {tables.map((item, index) => (
              <li
                key={index}
                className="text-[10px] md:text-sm hover:text-gray-500 mt-1 hover:underline cursor-pointer text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-70 w-42 bg-no-repeat bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${assets.hall})` }}
        />
      </div>
    </div>
  );
};

export default CategoriesHover;
