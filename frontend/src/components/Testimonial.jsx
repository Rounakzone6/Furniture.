import React from "react";
import { clients } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-6 md:py-10">
      <div className="max-w-[80%] mx-auto p-2">
        <div className="flex items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-center">Testimonial</p>
        </div>
        <p className="text-xl text-center md:text-3xl font-medium">
          What <span className="text-[#224A26]">Our Clients Say</span>
        </p>
        </div>
        <div className="md:w-[80%] mx-auto">
          <Slider {...settings}>
            {clients.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-md rounded-xl py-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between pr-4">
                    <div className="flex gap-3">
                      <div className="w-24 h-20 bg-[#224A26] rounded-r-full px-4 py-1">
                        <div
                          className="w-18 h-18 rounded-full border-white border bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.img})` }}
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-semibold text-sm md:text-xl">
                          {item.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">
                          {item.role}
                        </p>
                        <p className="text-xs text-gray-400">{item.rating}</p>
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-[#224A26] p-2 bg-gray-200 rounded-full"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700 px-2 text-xs md:text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
