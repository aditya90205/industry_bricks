// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-10 text-center md:text-start">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* Column 1 */}
//           <div className="flex flex-col">
//             <h1 className="text-white text-2xl font-bold mb-4">PRIVANA</h1>
//           </div>
//           {/* Column 2 */}
//           <div className="flex flex-col">
//             <h2 className="text-lg font-semibold text-white mb-2">Locations</h2>
//             <ul className="space-y-1">
//               <li>BENGALURU</li>
//               <li>CHENNAI</li>
//               <li>COIMBATORE</li>
//               <li>DELHI NCR</li>
//               <li>GIFT CITY GUJARAT</li>
//               <li>HYDERABAD</li>
//               <li>KOCHI</li>
//               <li>KOZHIKODE</li>
//               <li>MYSURU</li>
//               <li>PUNE</li>
//               <li>THIRUVANANTHAPURAM</li>
//               <li>THRISSUR</li>
//             </ul>
//           </div>
//           {/* Column 3 */}
//           <div className="flex flex-col">
//             <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
//             <ul className="space-y-1">
//               <li>CAREERS</li>
//               <li>MEDIA CENTRE</li>
//               <li>SUSTAINABILITY</li>
//               <li>INVESTOR RELATIONS</li>
//               <li>PRIVANA SHARE PRICE</li>
//             </ul>
//           </div>
//           {/* Column 4 */}
//           <div className="flex flex-col">
//             <h2 className="text-lg font-semibold text-white mb-2">Get in Touch</h2>
//             <p>+91 80 46464500</p>
//             <p>webfeedback@PRIVANA.com</p>
//             <h3 className="text-lg font-semibold text-white mt-4">CIN Details</h3>
//             <p>PRIVANA LIMITED</p>
//             <p>L45201KA1995PLC018475</p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="hover:text-white">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="hover:text-white">
//                 <i className="fab fa-youtube"></i>
//               </a>
//               <a href="#" className="hover:text-white">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="hover:text-white">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" className="hover:text-white">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm">PRIVANA Limited © Copyright 2024 All rights reserved</p>
//           <div className="flex flex-wrap space-x-2 mt-2 md:mt-0">
//             <a href="#" className="text-sm hover:text-white">
//               Terms of Use
//             </a>
//             <span>|</span>
//             <a href="#" className="text-sm hover:text-white">
//               Privacy Policy
//             </a>
//             <span>|</span>
//             <a href="#" className="text-sm hover:text-white">
//               Disclaimer
//             </a>
//             <span>|</span>
//             <a href="#" className="text-sm hover:text-white">
//               RERA Disclaimer
//             </a>
//             <span>|</span>
//             <a href="#" className="text-sm hover:text-white">
//               Sitemap
//             </a>
//             <span>|</span>
//             <a href="#" className="text-sm hover:text-white">
//               Blog
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray-300 py-10 text-center md:text-start">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-bold mb-4 cursor-pointer hover:text-gray-400 font-martel">
            PRIVANA
            </h1>
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
                  className="cursor-pointer hover:text-gray-400"
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
                <li key={link} className="cursor-pointer hover:text-gray-400">
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
            <p className="cursor-pointer hover:text-gray-400">
              +91 80 46464500
            </p>
            <p className="cursor-pointer hover:text-gray-400">
              webfeedback@privana.com
            </p>
            <h3 className="text-lg font-semibold text-white mt-4">
              CIN Details
            </h3>
            <p className="cursor-pointer hover:text-gray-400">PRIVANA LIMITED</p>
            <p className="cursor-pointer hover:text-gray-400">
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
          <p className="text-sm">PRIVANA Limited © Copyright 2024 All rights reserved</p>
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
                <a
                  href="#"
                  className="text-sm cursor-pointer hover:text-white"
                >
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

