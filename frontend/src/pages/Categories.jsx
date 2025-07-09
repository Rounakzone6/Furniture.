import React from "react";
import { categories } from "../assets";
import { Link } from "react-router-dom";
import Path from "../components/Path";
import Service from "../components/Service";

const Categories = () => {
  return (
    <div>
      <Path path1="Categories" path2="Home" path3="Categories" />
      <div className="p-2 mx-auto md:max-w-[80%]">

      <div className="flex flex-wrap items-center md:gap-6 gap-2 my-10 justify-center">
        {categories.map((cat) => (
          <Link to={`/shop?category=${cat.slug}`} key={cat.slug}>
            <div className="rounded-xl md:w-60 md:h-75 w-40 h-40 shadow-md hover:scale-105 transition p-3">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full md:h-60 h-25 object-cover rounded-md"
                />
              <h3 className="text-center mt-2 font-semibold">{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>
        <Service />
        </div>
    </div>
  );
};

export default Categories;
