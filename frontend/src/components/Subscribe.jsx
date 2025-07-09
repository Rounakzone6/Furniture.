import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NewsLetter from "./NewsLetter";

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <div className="bg-gray-200 py-10">
      <div className="md:max-w-[80%] mx-auto text-center p-2 flex gap-4 items-center justify-center flex-col">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p className="text-xl">Our NewsLetter</p>
        </div>
        <p className="text-3xl font-medium md:text-4xl">
          Subscribe to Our Newsletter to Get <br />
          <span className="text-[#224A26]">
            Updates to Our Latest Collection
          </span>
        </p>
        <p>
          Get 20% Off on your first order just by subscribing to our newsletter
        </p>
        <button
          onClick={() => setSubscribe(true)}
          type="submit"
          className="py-2 px-6 cursor-pointer font-medium md:text-xl bg-yellow-500 rounded-full"
        >
          Subscribe
        </button>
        {subscribe && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-black bg-amber-500 rounded-full py-1 px-2.5 font-bold text-xl"
                onClick={() => setSubscribe(false)}
              >
                ✕
              </button>
              <NewsLetter />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
