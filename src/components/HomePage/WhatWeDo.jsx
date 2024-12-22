import image15 from "../../../public/images/image15.jpg";
import image16 from "../../../public/images/image16.jpg";
import image17 from "../../../public/images/image17.jpg";

const WhatWeDo = () => {
  return (
    <div className="bg-white py-12">
      {/* Section Title */}
      <h2 className="text-center text-2xl mb-4">WHAT WE DO</h2>
      <p className="text-center text-gray-600 px-4 max-w-3xl mx-auto leading-7">
        Redefining living spaces and creating iconic landmarks through an
        unswerving passion for quality and the philosophy of self-reliance.
      </p>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3 mt-8 lg:px-[8.4rem] mx-auto w-12/12">
        {/* Card 1 */}

        <div className="flex h-[25rem] lg:h-[46rem] flex-col items-center ">
          {/* <div className="h-[25rem] lg:h-[37rem] w-full max-w-md overflow-hidden "> */}
          <img
            src={image15}
            alt="Commercial"
            className="h-full w-full object-cover"
          />
          {/* </div> */}
          <h3 className="text-gray-700  font-martel text-center text-lg mt-2 pb-1">
            COMMERCIAL
          </h3>
        </div>
        {/* Card 2 */}
        <div className="flex h-[25rem] lg:h-[46rem] flex-col items-center">
          {/* <div className="h-[25rem] lg:h-[37rem] w-full max-w-md overflow-hidden "> */}
          <img
            src={image16}
            alt="Contracting"
            className="h-full w-full object-cover"
          />
          {/* </div> */}
          <h3 className="text-gray-700  font-martel text-center text-lg mt-2 pb-1">
            CONTRACTING
          </h3>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col h-[25rem] lg:h-[46rem] items-center">
          {/* <div className="h-[25rem] lg:h-[37rem] w-full max-w-md overflow-hidden "> */}
          <img
            src={image17}
            alt="Manufacturing"
            className="h-full w-full object-cover"
          />
          {/* </div> */}
          <h3 className="text-gray-700  font-martel text-center text-lg mt-2 pb-1">
            MANUFACTURING
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
