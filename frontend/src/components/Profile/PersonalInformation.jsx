import React from "react";
import assets from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const PersonalInformation = () => {
  return (
    <div>
      <div
        className="relative cursor-pointer group w-24 h-24 flex-shrink-0 rounded-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.profile})` }}
      >
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-white text-2xl"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-1 flex-col">
            <p>
              First Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="firsName"
              placeholder="First Name"
              className="px-2 py-1 w-60 rounded-full border"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p>
              Last Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="px-2 py-1 w-60 rounded-full border"
            />
          </div>
        </div>
        <form>
          <div className="flex gap-1 flex-col">
            <p>
              Email<span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="px-3 py-1 rounded-full border"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p>
              Phone<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="phone"
              placeholder="+0123-456-789"
              className="px-3 py-1 rounded-full border"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p>
              Gender<span className="text-red-500">*</span>
            </p>
            <select className="px-3 py-1 rounded-full border" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#224A26] font-medium text-white rounded-full my-4 py-2 px-4"
          >
            Update Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
