import React from "react";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import OurProducts from "../components/OurProducts";
import TodayDeals from "../components/TodayDeals";
import Testimonial from "../components/Testimonial";
import NewsBlogs from "../components/NewsBlogs";
import FollowUs from "../components/FollowUs";
import Faqs from "../components/Faqs";
import Subscribe from "../components/Subscribe";
import FlashSale from "../components/FlashSale";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <OurProducts />
      <FlashSale />
      <TodayDeals />
      <Testimonial />
      <NewsBlogs />
      <FollowUs />
      <Faqs />
      <Subscribe />
    </div>
  );
};

export default Home;
