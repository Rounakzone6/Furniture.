import {
  faArrowRight,
  faCartPlus,
  faChair,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import assets, { hero } from "../assets";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-200 px-2 py-6">
      <div className="md:max-w-[80%] flex-wrap md:flex-nowrap gap-4 mx-auto flex">
        <div className="flex flex-col md:w-[50%] justify-between items-start">
          <p className="px-4 py-1 w-70 bg-white rounded-full">
            <FontAwesomeIcon icon={faChair} className="pr-1" />
            The Best Online Furniture Store
          </p>
          <p className="text-3xl md:text-5xl my-2 font-medium">
            Explore Our{" "}
            <span className="text-[#224A26]">Modern Furniture Collection</span>
          </p>
          <p className="py-2 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            alias, quia vel natus sint illo rem fugiat facere molestias
            blanditiis ut dolores repellat! Quia repellendus dolorem voluptatem
            numquam nesciunt ipsam.
          </p>
          <div className="flex gap-6 my-4 items-end justify-between w-full pr-4">
            <button onClick={()=>navigate('/shop')} className="text-white cursor-pointer px-3 mt-4 py-1 w-30 bg-[#224A26] rounded-full">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <p onClick={()=>navigate('/shop')} className="text-[#224A26] cursor-pointer font-medium underline">
              View All Products
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={assets.group_profiles} alt="Groups" className="h-6 md:h-10" />
            <div>
              <p className="font-medium text-xs md:text-sm">4.9 Ratings+</p>
              <p className="text-xs text-gray-600">Trusted by 50k+ Customers</p>
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          className="md:w-[50%] w-[90%] mx-auto h-95 border border-gray-300 shadow rounded-2xl"
        >
          {hero.map((item, index) => (
            <div key={index} className="p-2">
              <div
                className="w-full mx-auto rounded-2xl h-75 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="flex justify-between mt-3 items-center">
                <div>
                  <p className="font-medium text-xl">{item.title}</p>
                  <p>{item.about}+ Items</p>
                </div>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="text-white p-3 cursor-pointer text-2xl bg-[#224A26] rounded-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
