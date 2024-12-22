import favicon from "../assets/favicon1.jpeg";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-amber-500 py-10 text-center md:text-start">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="">
              <img src={favicon} alt="logo" className="h-12 hidden md:inline" />{" "}
              <h1 className="text-white text-2xl font-bold mb-4 cursor-pointer hover:text-white font-martel">
                PRIVANA
              </h1>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col">
            {/* <h2 className="text-lg font-semibold text-white mb-2">Locations</h2> */}
            <ul className="space-y-1">
              {[
                "BENGALURU",
                "CHENNAI",
                "COIMBATORE",
                "DELHI NCR",
                "GIFT CITY GUJARAT",
                "HYDERABAD",
                "KOCHI",
                "KOZHIKODE",
                "MYSURU",
                "PUNE",
                "THIRUVANANTHAPURAM",
                "THRISSUR",
              ].map((location) => (
                <li
                  key={location}
                  className="cursor-pointer hover:text-white"
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col">
            {/* <h2 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h2> */}
            <ul className="space-y-1">
              {[
                "CAREERS",
                "MEDIA CENTRE",
                "SUSTAINABILITY",
                "INVESTOR RELATIONS",
                "PRIVANA SHARE PRICE",
              ].map((link) => (
                <li key={link} className="cursor-pointer hover:text-white">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-2">
              Get in Touch
            </h2>
            <p className="cursor-pointer hover:text-white">
              +91 80 46464500
            </p>
            <p className="cursor-pointer hover:text-white">
              webfeedback@privana.com
            </p>
            <h3 className="text-lg font-semibold text-white mt-4">
              CIN Details
            </h3>
            <p className="cursor-pointer hover:text-white">
              PRIVANA LIMITED
            </p>
            <p className="cursor-pointer hover:text-white">
              L45201KA1995PLC018475
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4  justify-center md:justify-end">
          <a
            href="#"
            className="hover:text-white"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-2xl cursor-pointer"></i>
          </a>
          <a
            href="#"
            className="hover:text-white"
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-2xl cursor-pointer"></i>
          </a>
          <a
            href="#"
            className="hover:text-white"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl cursor-pointer"></i>
          </a>
          <a
            href="#"
            className="hover:text-white"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl cursor-pointer"></i>
          </a>
          <a
            href="#"
            className="hover:text-white"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-2xl cursor-pointer"></i>
          </a>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            PRIVANA Limited © Copyright 2024 All rights reserved
          </p>
          <div className="flex flex-wrap space-x-2 mt-2 md:mt-0">
            {[
              "Terms of Use",
              "Privacy Policy",
              "Disclaimer",
              "RERA Disclaimer",
              "Sitemap",
              "Blog",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <a href="#" className="text-sm cursor-pointer hover:text-white">
                  {item}
                </a>
                {index < 5 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
