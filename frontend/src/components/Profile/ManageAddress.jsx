import React from "react";

const ManageAddress = () => {
  return (
    <div>
      <div className="border p-2 rounded-xl border-gray-300">
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-xs md:text-sm">Rouank Gupta</p>
            <p className="text-[10px]">
              BBD University, Lucknow, Uttar Pradesh, India (226028)
            </p>
          </div>
          <div className="flex gap-2">
            <button className="text-[#224A26] text-xs md:text-sm">Edit</button>
            <button className="text-red-500 text-xs md:text-sm">Delete</button>
          </div>
        </div>
        <hr className="text-gray-300 my-1" />
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-xs md:text-sm">Rouank Gupta</p>
            <p className="text-[10px]">
              BBD University, Lucknow, Uttar Pradesh, India (226028)
            </p>
          </div>
          <div className="flex gap-2">
            <button className="text-[#224A26] text-xs md:text-sm">Edit</button>
            <button className="text-red-500 text-xs md:text-sm">Delete</button>
          </div>
        </div>
      </div>
      <form className="p-2 border rounded-2xl mt-2 border-gray-400">
        <p>Add New Address</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-1 flex-col">
            <p className="text-sm">
              First Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              className="px-2 py-0.5 border-gray-400 w-56 rounded-full border"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p className="text-sm">
              Last Name<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              className="px-2 py-0.5 border-gray-400 w-56 rounded-full border"
            />
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">Company Name (Optional)</p>
          <input
            type="text"
            name="company"
            placeholder="Enter Company Name"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            Country<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="country"
            required
            placeholder="Enter Country"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            Street Address<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="address"
            required
            placeholder="Enter Street Address"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            City<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="city"
            required
            placeholder="Enter City"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            State<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="state"
            required
            placeholder="Enter State"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            Zip Code<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="zipcode"
            required
            placeholder="Enter Zip Code"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            Phone<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="phone"
            required
            placeholder="+0123-456-789"
            className="px-3 py-0.5 border-gray-400 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            Phone<span className="text-red-500">*</span>
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"
            className="px-3 py-0.5 border-gray-400 rounded-full border "
          />
        </div>
        <button
          type="submit"
          className="bg-[#224A26] font-medium text-white rounded-full my-4 py-2 px-4"
        >
          Add Address
        </button>
      </form>
    </div>
  );
};

export default ManageAddress;
