import React, { useDebugValue } from "react";

const PasswordManager = () => {
  return (
    <div className="md:w-[30vw] w-[50vw]">
      <form action="update-password" className=" flex flex-col gap-4">
        <div className="flex gap-1 flex-col">
          <label htmlFor="">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="px-3 py-1 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            className="px-3 py-1 rounded-full border"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            className="px-3 py-1 rounded-full border"
          />
        </div>
        <button
          type="submit"
          className="bg-[#224A26] font-medium text-white rounded-full py-2 px-4"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default PasswordManager;
