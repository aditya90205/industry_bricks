import misvis from "../../../public/images/vision.png";

const VisionMission = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      {/* Heading Section */}
      <div className="w-full py-8 bg-white text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-600 font-martel">
          VISION & MISSION
        </h1>
      </div>

      {/* Image and Text Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={misvis} // Replace with the actual image path
          alt="Vision and Mission"
          className="w-11/12 lg:w-[82.43%] mx-auto h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold tracking-wide">VISION</h2>
              <p className="text-sm md:text-lg font-light">
                TRANSFORM THE WAY PEOPLE PERCEIVE ‘QUALITY’
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide">MISSION</h2>
              <p className="text-sm md:text-lg font-light">
                NO SHORTCUTS TO QUALITY
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide">PHILOSOPHY</h2>
              <p className="text-sm md:text-lg font-light">PASSION AT WORK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}

      <div className="py-8 flex justify-center">
        <button className="px-4 py-3 border border-gray-600 text-amber-400 font-martel bg-green-700 hover:bg-white hover:text-black transition-all  rounded-md">
          Download Corporate Brochure
        </button>
      </div>
    </div>
  );
};

export default VisionMission;
