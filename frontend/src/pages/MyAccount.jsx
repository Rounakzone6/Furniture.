import React, { useContext, useEffect, useState } from "react";
import Path from "../components/Path";
import Service from "../components/Service";
import PersonalInformation from "../components/Profile/PersonalInformation";
import Logout from "../components/Profile/Logout";
import PasswordManager from "../components/Profile/PasswordManager";
import PaymentMethod from "../components/Profile/PaymentMethod";
import ManageAddress from "../components/Profile/ManageAddress";
import MyOrder from "../components/Profile/MyOrder";

const MyAccount = () => {
  const [current, setCurrent] = useState("Personal Information");
  
  const renderComponent = () => {
    switch (current) {
      case "Personal Information":
        return <PersonalInformation />;
      case "My Orders":
        return <MyOrder />;
      case "Manage Address":
        return <ManageAddress />;
      case "Payment Method":
        return <PaymentMethod />;
      case "Password Manager":
        return <PasswordManager />;
      case "Logout":
        return <Logout />;
      default:
        return null;
    }
  };

  return (

    <>
      <Path path1="My Account" path2="Home" path3="My Account" />
      <div className="md:max-w-[80%] p-2 mx-auto">
        <div className="flex gap-4">
            <ul className="space-y-2 w-30 md:w-[30%]">
              {[
                "Personal Information",
                "My Orders",
                "Manage Address",
                "Payment Method",
                "Password Manager",
                "Logout",
              ].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer p-2 rounded ${
                    current === item ? "bg-gray-200 font-semibold" : ""
                  }`}
                  onClick={() => setCurrent(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          <div className="mt-4">{renderComponent()}</div>
        </div>
        <Service />
      </div>
    </>
  );
};

export default MyAccount;
