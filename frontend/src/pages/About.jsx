import React from "react";
import Path from "../components/Path";
import Service from "../components/Service";
import assets, { team } from "../assets";
import { faCouch, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const about = [
  { cnt: 25, title: "Years" },
  { cnt: 180, title: "Stores" },
  { cnt: 100, title: "Custormers" },
  { cnt: 35, title: "Awards" },
  { cnt: 98, title: "Satisfied" },
];

const product = [
  {
    img: faRankingStar,
    title: "Best Quality Wood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: faCouch,
    title: "Best Quality Wood",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];


const About = () => {
  return (
    <>
      <Path path1="About Us" path2="Home" path3="About Us" />
      <div className="px-2 py-5 md:max-w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-yellow-600" />
            <p>Our Story</p>
          </div>
          <p className="font-medium text-2xl md:text-3xl">
            Crafted Comfort:{" "}
            <span className="text-[#224A26]">
              Quality <br />
              Materials, Enduring Designs
            </span>
          </p>
          <p className="py-3 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestias veniam enim, rem perferendis voluptas placeat, hic
            necessitatibus praesentium mollitia repellat deserunt doloribus
            culpa atque fugiat voluptatum velit, aliquam corporis.
          </p>
          <p className="font-medium text-xl">Rounak Gupta</p>
          <p>
            Software Engineer{" "}
            <span className="inline-block mb-0.5 w-1 h-1 mx-2 bg-amber-500 rounded-full"></span>
            CEO
          </p>
          <div className="flex mt-4 gap-4">
            <img
              src={assets.profile}
              alt=""
              className="md:h-95 h-65 rounded-2xl"
            />
            <div className="flex flex-col gap-2 md:gap-4">
              <img
                src={assets.profile1}
                alt=""
                className="md:h-45 h-32 w-full  rounded-2xl"
              />
              <img
                src={assets.profile2}
                alt=""
                className="md:h-45 h-32 rounded-2xl w-full"
              />
            </div>
          </div>
          <ul className="flex mt-2 justify-around w-full md:w-[60%] bg-amber-400 p-2 md:p-4 rounded-2xl">
            {about.map((item, index) => (
              <li key={index} className="text-xs md:text-sm">
                <span className="font-medium">{item.cnt}+</span>
                <br />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-4 gap-4">
          <img src={assets.profile1} alt="" className="w-[50%] rounded-2xl" />
          <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-yellow-600" />
              <p className="text-xs md:text-lg">Our Product Quality</p>
            </div>
            <p className="font-medium text-md md:text-4xl">
              Setting the{" "}
              <span className="text-[#224A26]">
                Standard for Quality Furniture
              </span>
            </p>
            <p className="text-xs md:py-6 md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              molestias veniam enim, rem perferendis voluptas placeat.
            </p>
            <ul className="flex justify-around w-full">
              {product.map((item, index) => (
                <li key={index} className="">
                  <FontAwesomeIcon icon={item.img} />
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs md:text-sm text-gray-500">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-6">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-yellow-600" />
              <p className="text-sm md:text-lg">Our Team</p>
            </div>
            <p className="font-medium text-xl md:text-3xl">
              Meet{" "}
              <span className="text-[#224A26]">
                Our Team
              </span>
            </p>
            <p className="text-xs md:py-6 py-3 md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              molestias veniam enim, rem perferendis voluptas placeat.
            </p>
            <ul className="flex gap-4">
              {team.map((item, index) => (
                <li key={index} className=" rounded-2xl bg-gray-100 flex pb-2 flex-col items-center justify-center">
                  <img src={item.img} alt={item.name} className="h-40 w-40 rounded-2xl md:h-60 md:w-60 mb-2" />
                  <p className="text-sm md:text-xs">{item.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">[{item.role}]</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Service />
      </div>
    </>
  );
};

export default About;
