import React from "react";
import assets from "../assets";

const NewsLetter = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 w-[90vw] md:w-[60vw] max-h-[90vh] overflow-y-auto bg-white border rounded-3xl p-4">
        <img
          src={assets.sofa5}
          alt="Newsletter"
          className="w-full md:w-[50%] rounded-3xl object-cover"
        />
        <div className="flex flex-col justify-center gap-2 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-yellow-600" />
            <p className="text-sm md:text-lg font-medium">
              Subscribe To Our Newsletter
            </p>
          </div>
          <p className="text-lg md:text-2xl font-semibold">
            Get Weekly Newsletter
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptatibus sunt.
          </p>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <label className="block text-sm">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full py-1 px-3 border border-gray-300 rounded-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="block text-sm">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full py-1 px-3 border border-gray-300 rounded-full text-sm"
              />
            </div>
            <div className="flex items-start gap-2 text-xs md:text-sm">
              <input type="checkbox" name="t&c" className="mt-1" />
              <p>
                Agree with{" "}
                <span className="text-green-700 underline cursor-pointer">
                  Terms & Condition
                </span>{" "}
                and{" "}
                <span className="text-green-700 underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white py-2 px-4 rounded-full text-sm mt-2"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
