import React from "react";
import assets from "../assets";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowUs = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-lg">Follow Us</p>
        </div>
        <p className="md:text-3xl text-2xl font-medium">
          Follow Us On <span className="text-[#224A26]">Instagram</span>
        </p>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full mt-4 px-4">
          <ul className="flex gap-4">
            {[
              assets.wardrobe,
              assets.hall,
              assets.sofa2,
              assets.diningTable,
              assets.bedroom1,
              assets.bedroom2,
            ].map((img, index) => (
              <li
                key={index}
                className="relative cursor-pointer group md:w-60 md:h-48 w-40 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-2xl"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
