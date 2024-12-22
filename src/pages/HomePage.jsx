import AboutPrivanaCards from "../components/HomePage/AboutPrivanaCards";
import AboutSection from "../components/HomePage/AboutSection";
import Card from "../components/HomePage/Card";
import Carousel from "../components/HomePage/Carousel";
import Header from "../components/HomePage/Header";
import SearchProperties from "../components/HomePage/SearchProperties";
import WhatWeDo from "../components/HomePage/WhatWeDo";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <Carousel />
      <SearchProperties />
      <Card />
      <WhatWeDo />
      <AboutPrivanaCards />
    </>
  );
};

export default HomePage;
