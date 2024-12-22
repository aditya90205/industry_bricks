// AboutSection.jsx
import mainImage from "../../../public/images/main.jpg";
const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row  lg:justify-evenly px-6 lg:px-16 py-8 ">
      <div className="hidden lg:block w-full lg:w-1/3 relative group lg:mr-10">
        <img
          src={mainImage}
          alt="Infosys Bengaluru, built by SOBHA"
          className="w-full h-[39rem] object-cover  transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
        />
        <p className="text-xs text-gray-500 mt-2">
          Infosys Bengaluru, built by SOBHA
        </p>
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left  ">
        <h2 className="text-xl lg:text-2xl font-medium tracking-wide mb-4 text-gray-700">
          PASSION AT WORK
        </h2>
        <p className="text-sm lg:text-base  lg:text-md text-gray-700 mb-4 font-martel leading-7 lg:leading-9">
        At Privana Realty, We believe real estate is more than just transactions—it’s about building legacies, creating opportunities, and shaping futures. As a trusted partner in the industry, we specialise in connecting buyers, sellers, and investors with properties that align with their goals and values.
        </p>
        <p className="text-sm lg:text-base lg:text-md text-gray-700 mb-4 font-martel leading-7 lg:leading-9">
        With a commitment to excellence, innovation, and personalised service, we go beyond the numbers to understand the deeper stories behind each decision. Whether you’re seeking to grow your portfolio, establish roots, or create generational wealth, our expert team is here to guide you every step of the way.
        </p>
        <p className="text-sm lg:text-base lg:text-md text-gray-700 mb-6 font-martel leading-7 lg:leading-9">
          SOBHA Ltd. is one of the finest real estate development companies in
          India – A trusted builder based out of Bangalore, since 1995.
        </p>
        <p className="text-sm lg:text-base lg:text-md text-gray-700 mb-6 font-martel leading-7 lg:leading-9">
        Backed by years of experience and an in-depth understanding of the market, we prioritise integrity, transparency, and tailored solutions. At Privana Realty, we don’t just help you invest in properties—we help you invest in your future.
        </p>
        <button className="px-4 py-2 border border-gray-600 text-gray-700 font-martel hover:bg-green-700 hover:text-white transition-all lg:mt-[3.5rem] rounded-md">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default AboutSection;







