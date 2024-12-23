import React from "react";
import image5 from "../../../public/images/philo.jpeg";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${image5})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl font-bold font-martel">PHILOSOPHY</h1>
        <p className="mt-4 text-lg max-w-3xl">
          At PRIVANA, we have always strived for benchmark quality,
          customer-centric approach, robust engineering, in-house research,
          uncompromising business ethics, timeless values, and transparency in
          all spheres of business conduct. This has helped us in becoming the
          most preferred real estate brand in India.
        </p>
      </div>
    </div>
  );
};

export default Header;
