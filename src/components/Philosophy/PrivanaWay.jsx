import mainImage from "../../../public/images/privanaWay.jpeg";

const PrivanaWay = () => {
  return (
    <section className="flex flex-col lg:flex-row  lg:justify-evenly px-6 lg:px-16 py-8 ">
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left  ">
        <h2 className="text-xl lg:text-2xl font-medium tracking-wide mb-4 text-gray-700">
          THE PRIVANA WAY
        </h2>
        <p className="text-sm lg:text-base  lg:text-md text-gray-700 mb-4 font-martel leading-7 lg:leading-9">
          Backward integration is what drives the organisation&apos;s turnkey
          projects. In a turnkey scenario, we bring the expertise of all our
          divisions to focus on every single aspect of a project. In other
          words, everything from precision engineering to aesthetic design and
          from quality metal glazing to high-class interiors is done in-house.
          This allows for stringent control on quality, which in turn gives our
          customers a fine combination of precision and aesthetics. The Infosys
          centres in Bangalore, Mysore and several other cities are fine
          examples of our expertise in turnkey construction.
        </p>
      </div>

      <div className="w-full lg:w-1/3 relative group">
        <img
          src={mainImage}
          alt="built by PRIVANA"
          //   className="w-full h-[39rem] object-cover  transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          className="mb-5 lg:mb-0 w-1/2 mx-auto lg:w-full h-[27rem] lg:h-[39rem] object-cover  transform transition-transform duration-300 lg:group-hover:scale-105 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default PrivanaWay;
