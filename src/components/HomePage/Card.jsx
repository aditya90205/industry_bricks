import Slider from "react-slick";

import image6 from "../../../public/images/image6.jpg";
import image7 from "../../../public/images/image7.jpg";
import image8 from "../../../public/images/image8.jpg";
import image9 from "../../../public/images/image9.jpg";
import image10 from "../../../public/images/image10.jpg";

const cities = [
  { name: "THIRUVANANTHPURAM", image: `${image6}` },
  { name: "BENGALURU", image: `${image7}` },
  { name: "CHENNAI", image: `${image8}` },
  { name: "DELHI NCR", image: `${image9}` },
  { name: "GIFT CITY", image: `${image10}` },
];

// Custom arrow components for positioning above the left and right images
// eslint-disable-next-line react/prop-types
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-900 z-10 ml-1"
      style={{ left: "10px" }} // Fine-tuned positioning over the leftmost image
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-900 z-10 mr-1"
      style={{ right: "10px" }} // Fine-tuned positioning over the rightmost image
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const Card = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Autoplay is disabled
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div className="container max-w-[925px] lg:max-w-[1634px] mx-auto">
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index} className="px-3">
                <div className="relative overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-[20rem] lg:h-[34rem] object-cover "
                  />
                  <h3 className=" text-gray-700  font-martel text-center text-lg mt-2 pb-1">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 border border-gray-600 text-amber-400 font-martel bg-green-700 hover:bg-white hover:text-black transition-all lg:mt-[.5rem] rounded-md mb-2">
          All Locations
        </button>
      </div>
      <div className="w-11/12 md:w-[55rem] lg:w-[100rem] mx-auto border-t mt-3"></div>
    </>
  );
};

export default Card;






