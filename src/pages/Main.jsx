import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider";
import NavigateButtons from "../components/NavigateButtons";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection/>
      <Footer/>
    </div>
  );
};

export default Main;
