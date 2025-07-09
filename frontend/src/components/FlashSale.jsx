import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountdownTimer from "./CountdownTimer";
import assets from "../assets";

const FlashSale = () => {
  return (
    <div className="py-10">
      <div className="p-2 md:max-w-[80%] flex gap-2 justify-center mx-auto items-center flex-col md:flex-row">
        <div className="bg-gray-200 md:h-[70vh] flex items-center justify-center p-6 rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-2xl font-medium">
              Flash <span className="text-[#224A26]">Sale!</span>
            </p>
            <p>Get 25% Off - Limited Time Offer!</p>
            <div className="mt-4">
              <CountdownTimer days={5} />
            </div>
            <button
              className="py-2 cursor-pointer mt-4 px-6 bg-[#224A26] text-white font-medium rounded-full"
              type="submit"
            >
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div
            className="md:h-[70vh] cursor-pointer p-2 h-[20vh] hover:scale-101 transition-all duration-300 rounded-2xl shadow-md border-gray-200 border md:w-[20vw] w-[40vw] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${assets.kitchen})` }}
          >
            <div className="border-1 border-white w-full h-full rounded-xl" />
          </div>
          <div
            className="md:h-[70vh] cursor-pointer p-2 h-[20vh] rounded-2xl hover:scale-101 transition-all duration-300 shadow-md border-gray-200 border md:w-[20vw] w-[40vw] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${assets.nightstand})` }}
          >
            <div className="border-1 border-white w-full h-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
