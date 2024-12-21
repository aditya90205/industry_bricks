import AboutSection from "../components/AboutSection";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import SearchProperties from "../components/SearchProperties";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <Carousel />
      <SearchProperties />
      <Card />
    </>
  );
};

export default HomePage;
