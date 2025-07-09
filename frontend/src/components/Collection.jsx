import {
  faBox,
  faCreditCard,
  faHeadset,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import assets, { features } from "../assets";
import Service from "./Service";

const Collection = () => {
  return (
    <div className="py-6">
      <div className="md:max-w-[80%] p-2 mx-auto">
        <Service />
        <div className="flex flex-col mt-4 md:flex-row gap-4">
          <div
            className="p-4 h-70 md:h-125 rounded-2xl bg-gray-200 bg-no-repeat bg-center md:bg-bottom  bg-cover"
            style={{ backgroundImage: `url(${assets.chair})` }}
          >
            <div className="flex md:flex-col justify-between ">
              <p className="bg-white w-[30vw] md:w-[9vw]  px-2 py-1  rounded-full">
                <span className="text-yellow-500 font-medium">1500+</span> Items
              </p>
              <p className="text-3xl font-medium">Chairs</p>
            </div>
            <p className="text-sm text-[#001b4d]">
              Upgrade your comfort with our ergonomic chairs designed for
              long-lasting support. Crafted with durable materials and sleek
              aesthetics, they’re perfect for both work and relaxation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="p-4 h-60 rounded-2xl bg-gray-200 bg-no-repeat bg-bottom bg-cover"
              style={{ backgroundImage: `url(${assets.sofa4})` }}
            >
              <div className="flex md:flex-col justify-between ">
                <p className="bg-white px-2 w-[30vw] md:w-[9vw] py-1 rounded-full">
                  <span className="text-yellow-500 font-medium">750+</span>{" "}
                  Items
                </p>
                <p className="text-3xl text-white md:text-black font-medium">
                  Sofa
                </p>
              </div>
              <p className="text-sm text-[#001b4d]">
                Experience luxury and comfort with our plush sofas. From
                spacious sectionals to cozy loveseats, each piece is built to
                enhance your living space with timeless style.
              </p>
            </div>
            <div
              className="p-4 h-60 rounded-2xl bg-no-repeat bg-bottom bg-cover"
              style={{ backgroundImage: `url(${assets.lighting})` }}
            >
              <div className="flex md:flex-col justify-between ">
                <p className="bg-white px-2 w-[30vw] md:w-[9vw] py-1 rounded-full">
                  <span className="text-yellow-500 font-medium">450+</span>{" "}
                  Items
                </p>
                <p className="text-3xl font-medium">Lighting</p>
              </div>
              <p className="text-sm text-[#001b4d]">
                Illuminate your home with modern lighting solutions. Whether you
                prefer ambient glow or task-focused brightness, our collection
                adds warmth and elegance to every room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
