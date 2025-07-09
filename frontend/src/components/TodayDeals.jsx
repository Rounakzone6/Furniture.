import React from "react";
import { cards, todayDeals } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

const TodayDeals = () => {
  return (
    <div className="py-10">
      <div className="md:max-w-[80%] mx-auto p-2 ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-full items-start">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-[2px] bg-yellow-600" />
              <p className="text-md md:text-xl">Today Deals</p>
            </div>
            <div className="flex flex-col w-full md:flex-row justify-between items-center">
              <p className="text-2xl md:text-3xl">
                <span className="text-[#224A26] font-medium">Deals</span> of the
                Day
              </p>
              <p className="text-xs md:text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 my-6 flex-wrap md:flex-nowrap">
              {todayDeals.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer bg-gray-100 border-gray-300 shadow-md hover:scale-101 transition-all duration-300 items-center w-full border p-2 rounded-2xl"
                >
                  <div className="relative">
                    <p className="absolute bg-[#224A26] text-white px-2 py-0.5 font-medium rounded-full top-1 left-1">
                      {item.discount}% Off
                    </p>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-60 w-90 rounded-xl"
                    />
                  </div>
                  <div className="pl-3 flex flex-col">
                    <p className="text-gray-500">{item.name}</p>
                    <p className="font-medium text-lg md:text-xl">
                      {item.title}
                    </p>
                    <p className="font-medium">${item.price}</p>
                    <p className="font-medium py-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400"
                      />
                      {item.rating}
                    </p>
                    <p className="text-xs md:text-sm">{item.about}</p>
                    <button className="text-white px-3 mt-4 py-1 w-30 bg-[#224A26] rounded-full">
                      Shop Now <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex relative gap-4 mt-4">
            {cards.map((item, index) => (
              <div
                key={index}
                className="border cursor-pointer relative p-2 rounded-2xl hover:scale-105 transition-all duration-300 border-gray-300 bg-gray-100 overflow-hidden flex gap-2 md:h-80"
              >
                <div className="flex flex-col relative w-[80%] md:w-[72%]">
                  <p className="text-sm md:text-lg text-red-900">
                    Flat {item.discount}% Discount
                  </p>
                  <p className="text-lg md:text-2xl mb-2 font-medium">
                    {item.title}
                  </p>
                  <p className="text-sm mb-4">{item.about}</p>
                  <button className="text-white md:absolute bottom-10 px-3 py-2 w-30 bg-[#224A26] rounded-full">
                    Shop Now <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute w-20 md:w-40 top-1/5 md:top-4 right-[-30px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
