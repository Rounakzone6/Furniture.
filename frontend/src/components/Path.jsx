import React from "react";

const Path = ({ path1, path2, path3 }) => {
  return (
    <div className="bg-gray-200 md:py-4">
      <div className="md:max-w-[80%] py-2 mx-auto text-center">
        <p className="md:text-2xl text-lg font-medium">{path1}</p>
        <div className="text-md md:text-lg">
          <p>
            {path2}
            {" / "}{" "}
            <span className="underline text-[#224A26] cursor-pointer">
              {path3}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Path;
