import React, { useContext, useEffect, useState } from "react";
import { allProduct } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/shopContext";

const OurProducts = () => {
  const [category, setCategory] = useState("all");
  const [liked, setLiked] = useState(false);
  const {currency,onlySection} = useContext(ShopContext)

  return (
    <div className="py-6">
      <div className="flex flex-col md:max-w-[80%] justify-center items-center p-2 mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-lg md:text-xl">Our Products</p>
        </div>
        <p className="text-2xl text-center font-medium md:text-4xl">
          Our <span className="text-[#224A26]">Products Collections</span>
        </p>
        <div>
          <ul className="flex gap-2 items-center justify-center md:gap-4 mt-4">
            {[
              { key: "all", label: "All Products" },
              { key: "latest", label: "Latest Products" },
              { key: "best", label: "Best Sellers" },
              { key: "featured", label: "Featured Products" },
            ].map(({ key, label }) => (
              <li
                key={key}
                onClick={() => setCategory(key)}
                className={`text-xs md:text-sm px-4 py-2 border cursor-pointer border-gray-200 shadow-md rounded-full transition-all duration-300 ${
                  category === key
                    ? "bg-[#224A26] text-white scale-105"
                    : "hover:bg-[#224A26] hover:text-white"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-4">
            {allProduct
              .filter((item) => {
                if (category === "latest") return item.isLatest;
                if (category === "best") return item.isBestSeller;
                if (category === "featured") return item.isFeatured;
                return true; // for "all"
              })
              .slice(0, 4)
              .map((item, index) => (
                <div
                  key={index}
                  className="border flex flex-col justify-center rounded-2xl p-2 h-[45vh] md:h-[60vh] md:w-[17vw] w-[45vw] hover:scale-101 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="w-full h-full relative rounded-2xl bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <p className="py-1 px-1.5 bg-[#224A26] top-1 left-1 text-white absolute rounded-full">{item.offer}%</p>
                    <button className="border absolute right-1 top-1 rounded-full p-1 w-20 md:w-15 bg-gray-200 font-medium">
                      Add
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-xs"
                      />
                    </button>
                    <FontAwesomeIcon
                      icon={fasHeart}
                      className="text-xl absolute right-3 bottom-2 text-red-500"
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-800">{item.name}</p>
                    <p className="font-medium flex items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500 pr-1 text-xs"
                      />
                      {item.rating}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <div className="flex gap-3">
                      <p className="font-medium">{currency}{item.offerPrice}{onlySection}</p>
                      <del className="text-gray-500">{currency}{item.price}{onlySection}</del>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
