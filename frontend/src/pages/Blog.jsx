import React from "react";
import { blogs } from "../assets";
import Path from "../components/Path";
import Service from "../components/Service";

const Blog = () => {
  return (
    <div>
      <Path path1="Our Blog" path2="Home" path3="Blog" />
      <div className="md:max-w-[80%] mx-auto p-2">
        <div className="py-6">
          <div className="flex mt-4 flex-col relative md:flex-row gap-4 items-center justify-center">
            {blogs.map((blog, index) => (
              <div
                className="border cursor-pointer hover:scale-101 transition-all duration-300 border-gray-200 rounded-xl p-4  relative flex flex-col gap-2 shadow-md"
                key={index}
              >
                <div
                  className="relative md:w-[22vw] h-50 bg-no-repeat bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${blog.img})` }}
                >
                  <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white px-3 py-1 text-sm rounded-t-xl border-1 border-white">
                    {blog.date}
                  </p>
                </div>
                <p className="md:text-xl text-lg font-medium">{blog.title}</p>
                <p className="text-xs">{blog.text}</p>
                <p className="text-[#224A26] underline">Read More</p>
              </div>
            ))}
          </div>
        </div>
        <Service />
      </div>
    </div>
  );
};

export default Blog;
