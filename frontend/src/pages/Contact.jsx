import React from "react";
import Path from "../components/Path";
import Service from "../components/Service";
import LocationMap from "../components/LocationMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { socialMedia } from "../assets";

const Contact = () => {
  return (
    <div>
      <Path path1="Contact Us" path2="Home" path3="Contact Us" />
      <div className="md:max-w-[80%] p-2 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 py-6 justify-around">
          <div className="flex flex-col gap-4">
            <p className="text-2xl md:text-4xl">Get in Touch</p>
            <p className="text-gray-500">
              Your email address will not be published. Required fields are
              marked<span className="text-red-500">*</span>
            </p>
            <div className="flex justify-between flex-wrap md:flex-nowrap gap-2">
              <div className="flex flex-col gap-1 w-full">
                <p>Your Name<span className="text-red-500">*</span></p>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-200 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p>Email<span className="text-red-500">*</span></p>
                <input
                  type="email"
                  name="email" required
                  placeholder="example@gmail.com"
                  className="px-4 py-2 border border-gray-200 rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p>Subject<span className="text-red-500">*</span></p>
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter Subject"
                className="px-4 py-2 border border-gray-200 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Your Message<span className="text-red-500">*</span></p>
              <textarea
                name="message"
                required
                placeholder="Type your message..."
                className="px-4 py-2 border border-gray-200 rounded-xl"
              ></textarea>
            </div>
            <button className="px-4 md:px-6 py-2 bg-[#224A26] rounded-full text-white">
              Send Message
            </button>
          </div>
          <div className="p-4 bg-[#224A26] flex flex-col gap-4 justify-center text-gray-200 rounded-2xl">
            <div>
              <p className="text-xl font-medium">Address</p>
              <p>
                BBD University, Lucknow,
                <br />
                Uttar Pradesh (226028)
              </p>
            </div>
            <div>
              <p className="text-xl font-medium">Contact</p>
              <p>
                Phone: +0123-456-789 <br />
                Email: furniture@info.com
              </p>
            </div>
            <div>
              <p className="text-xl font-medium">Open Time</p>
              <p>
                Monday - Friday: 10:00 - 20:00 <br />
                Saturday - Sunday: 11:00 - 18:00
              </p>
            </div>
            <div>
              <p className="text-xl font-medium">Stay Connected</p>
              <ul className="flex gap-1">
                {socialMedia.map((item,index)=>(
                  <li key={index} className="py-1 px-2 text-black text-xs md:text-sm cursor-pointer hover:bg-yellow-600 rounded-full bg-yellow-500"><FontAwesomeIcon icon={item}/></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <LocationMap />
        <Service />
      </div>
    </div>
  );
};

export default Contact;
