import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

import image5 from "../../public/images/image5.jpg";
import image4 from "../../public/images/image4.jpg";
import image3 from "../../public/images/image3.jpg";
import image2 from "../../public/images/image2.jpg";
import image1 from "../../public/images/image1.jpeg";

const Carousel = () => {
  const images = [
    `${image1}`,
    `${image2}`,
    `${image3}`,
    `${image4}`,
    `${image5}`,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="carousel-container p-5 lg:px-36 w-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
      <style>{`
        .carousel-container {
          width: 100%;
          // height: calc(100vh); /* Adjust height to fill the screen */
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
