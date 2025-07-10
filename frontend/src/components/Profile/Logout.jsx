import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Logout = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <div>
      <p className="text-lg md:text-2xl font-medium">Logout 👋</p>
      <p>Are you sure you want to log out?</p>
      <button
        onClick={logout}
        type="submit"
        className="text-white font-medium px-4 py-2 bg-[#224A26] rounded-full mt-4"
      >
        Yes, Logout
      </button>
    </div>
  );
};

export default Logout;
