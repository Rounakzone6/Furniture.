import React from "react";
import { blogs } from "../assets";

const NewsBlogs = () => {
  return (
    <div className="py-6">
      <div className="md:max-w-[80%] mx-auto p-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p>News & Blogs</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="font-medium text-2xl md:text-3xl">
            Our Latest <br />
            <span className="text-[#224A26]">News & Blogs</span>
          </p>
          <button onClick={()=>navigate('/blogs')}
            className="px-4 md:px-6 py-2 bg-[#224A26] rounded-full text-white"
            type="submit"
          >
            View All Blogs
          </button>
        </div>
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
    </div>
  );
};

export default NewsBlogs;
