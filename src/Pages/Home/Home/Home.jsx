import React from "react";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Categories from "../Categories/Categories";
import Features from "../Features/Features";
import WhyUs from "../WhyUs/WhyUs";
import StatSection from "../StatSection/StatSection";
import KeySponsor from "../KeySponsor/KeySponsor";
import ChatBox from "../ChatBox/ChatBox";
import HomeBlog from "../HomeBlog/HomeBlog";
import AfterBanner from "../AfterBanner/AfterBanner";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <ChatBox></ChatBox>
      <Banner></Banner>
      <AfterBanner></AfterBanner>
      <Categories></Categories>
      <Features></Features>
      <WhyUs></WhyUs>
      <StatSection></StatSection>
      <FAQ></FAQ>
      <HomeBlog></HomeBlog>
      <KeySponsor></KeySponsor>
    </motion.div>
  );
};

export default Home;
