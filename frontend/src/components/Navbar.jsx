import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCartShopping,
  faF,
  faHeart,
  faSearch,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { socialMedia } from "../assets";
import NewsLetter from "./NewsLetter";
import FurnitureHover from "./FurnitureHover";
import CategoriesHover from "./CategoriesHover";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  const { token, setToken, navigate } = useContext(ShopContext);

  return (
    <div className="bg-gray-100">
      <div className="bg-[#204a25]">
        <div className="md:max-w-[80%] px-3 mx-auto">
          <div className="flex relative flex-col md:flex-row gap-1 justify-between py-1">
            <p className="text-gray-100 text-xs md:text-sm">
              Call Us:{" "}
              <span className="hover:underline cursor-pointer">
                +123-456-789
              </span>
            </p>
            <p className="text-gray-200 text-xs md:text-sm">
              Sign up and GET 25% OFF for your first order.{" "}
              <span
                onClick={() => setShowNewsletter(true)}
                className="underline text-yellow-500 hover:text-yellow-600 cursor-pointer"
              >
                Sign up now
              </span>
              {showNewsletter && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                  <div className="relative">
                    <button
                      className="absolute top-2 right-2 text-black bg-amber-500 rounded-full py-1 px-2.5 font-bold text-xl"
                      onClick={() => setShowNewsletter(false)}
                    >
                      ✕
                    </button>
                    <NewsLetter />
                  </div>
                </div>
              )}
            </p>
            <ul className="flex gap-1">
              {socialMedia.map((item, index) => (
                <li
                  key={index}
                  className="py-0.5 px-1.5 text-black text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"
                >
                  <FontAwesomeIcon icon={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center md:max-w-[80%] mx-auto p-2 md:py-4">
        <Link to="/" className="flex items-center justify-center gap-1">
          <FontAwesomeIcon
            icon={faF}
            className="px-2 py-1.5 rounded-full text-yellow-500 bg-[#224A26]"
          />
          <p className="text-xl text-[#224A26] md:text-2xl">Furniture.</p>
        </Link>
        <ul className="hidden md:flex gap-4">
          <NavLink to="/">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <NavLink to="/shop">
              <p>Shop</p>
            </NavLink>
            {showShopDropdown && (
              <div className="absolute top-full left-[-20vw] z-10">
                <FurnitureHover />
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowCategoriesDropdown(true)}
            onMouseLeave={() => setShowCategoriesDropdown(false)}
          >
            <NavLink to="/categories">
              <p>Categories</p>
            </NavLink>
            {showCategoriesDropdown && (
              <div className="absolute top-full left-[-15vw] z-10">
                <CategoriesHover />
              </div>
            )}
          </div>

          <NavLink to="/about">
            <p>About Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact">
            <p>Contact Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/blog">
            <p>Blog</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon
              icon={faUser}
              onClick={() =>
                token ? navigate("/my-account") : navigate("/login")
              }
            />
          </li>
          <li
            onClick={() => setVisible(!visible)}
            className="md:hidden cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <p>Back</p>
              <FontAwesomeIcon icon={faX} className="h-4 rotate-180" />
            </div>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
