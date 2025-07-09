import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { login } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Path from "../components/Path";
import Service from "../components/Service";
import { ShopContext } from "../context/shopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "api/user/register", {
          firstName,lastName,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 px-2">
      <Path path1="LogIn" path2="Home" path3="Sign In" />
      <div className="md:max-w-[80%] my-6 flex-wrap md:flex-nowrap gap-4 mx-auto flex">
        <div className="flex mx-auto bg-white flex-col md:w-[50%] border border-gray-200 shadow-md p-4 rounded-2xl">
          <div className="flex gap-1 items-center justify-center mb-2">
            <FontAwesomeIcon
              icon={faF}
              className="text-lg md:text-2xl font-bold py-2 px-3 rounded-full bg-[#224A26] text-yellow-600"
            />
            <p className="text-2xl md:text-3xl font-medium text-[#224A26]">
              Forniture.
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-medium">
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              {currentState === "Login"
                ? "Please fill your detail to access your account."
                : "Fill your information below or register with your social account"}
            </p>
          </div>
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-2 mt-4">
            {currentState === "Login" ? (
              ""
            ) : (
              <div className="flex gap-2">
                <div>
<p>
                  First Name<span className="text-red-500">*</span>
                </p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={firstName}
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="px-3 py-2 w-full md:w-56 border rounded-full "
                />
                </div>
                <div>
                  <p>
                  Last Name<span className="text-red-500">*</span>
                </p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={lastName}
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="px-3 py-2 w-full md:w-57 border rounded-full "
                />
                </div>
              </div>
            )}
            <div>
              <p>
                Email<span className="text-red-500">*</span>
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="px-3 py-2 w-full border rounded-full"
              />
            </div>
            <div>
              <p>
                Password<span className="text-red-500">*</span>
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                placeholder="Enter Password"
                className="px-3 py-2 w-full border rounded-full"
              />
            </div>
            <div className="flex justify-between">
              <p className="flex items-center">
                <input type="checkbox" className="mr-1" name="remember" />
                Remember me
              </p>
              {currentState === "Login" ? (
                ""
              ) : (
                <p
                  onClick={() => navigate("/forgot-password")}
                  className="underline font-medium text-[#224A26]"
                >
                  Forgot Password?
                </p>
              )}
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="w-full rounded-full py-2 bg-[#224A26] font-medium text-gray-300"
              >
                {currentState === "Login" ? "Sign In" : "Sign Up"}
              </button>
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <p className="text-sm text-gray-500">Or</p>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <button
                className="w-full flex items-center justify-center gap-1 rounded-full py-2  bg-gray-100"
                type="submit"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-gray-500" />
                {currentState === "Login" ? (
                  <p>Sign In With Google</p>
                ) : (
                  <p>Sign Up With Google</p>
                )}
              </button>
              <div className="flex gap-2 mt-4">
                {currentState === "Login"
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                {currentState === "Login" ? (
                  <p
                    onClick={() => setCurrentState("Sign Up")}
                    className="cursor-pointer text-blue-700 font-medium underline"
                  >
                    Create Account
                  </p>
                ) : (
                  <p
                    onClick={() => setCurrentState("Login")}
                    className="cursor-pointer text-blue-700 font-medium underline"
                  >
                    Login Here
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
        <Slider
          {...settings}
          className="md:w-[40%] w-[90%] mx-auto rounded-2xl"
        >
          {login.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[50vh] md:h-[85vh] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 md:p-3">
                <p className="text-xs text-gray-200 md:text-sm">{item.about}</p>
                <p className="text-sm md:text-lg font-semibold">{item.name}</p>
                <p className="text-xs md:text-sm text-gray-300">{item.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-w-[80%] mx-auto px-2">
        <Service />
      </div>
    </div>
  );
};

export default Login;
