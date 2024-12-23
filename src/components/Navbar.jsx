// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSecondSidebarOpen, setIsSecondSidebarOpen] = useState(false);
//   const [secondSidebarContent, setSecondSidebarContent] = useState([]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     if (isSecondSidebarOpen) {
//       setIsSecondSidebarOpen(false);
//     }
//   };

//   const openSecondSidebar = (content) => {
//     setSecondSidebarContent(content);
//     setIsSecondSidebarOpen(true);
//   };

//   const closeSecondSidebar = () => {
//     setIsSecondSidebarOpen(false);
//   };

//   const firstSidebarOptions = [
//     {
//       label: "WHO WE ARE",
//       content: ["Philosophy", "Leadership", "Showcase"],
//     },
//     {
//       label: "WHAT WE DO",
//       content: ["Residential", "Commercial", "Contracting"],
//     },
//     {
//       label: "CONTACT US",
//       content: [],
//       link: "/contact-us", // Add direct link to Contact Us
//     },
//     {
//       label: "BLOG",
//       content: [],
//       link: "/blog", // Add direct link to Blog
//     },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="sticky top-0 z-20 w-full flex items-center justify-between px-4 py-2 text-amber-500 h-20 bg-green-900">
//         <button
//           className="text-amber-500 text-xl focus:outline-none w-[6.2rem]"
//           onClick={toggleSidebar}
//         >
//           MENU &#9776;
//         </button>
        
//         {/* Logo and Title */}
//         <div className="flex items-center justify-center md:justify-center sm:justify-end md:mx-auto">
//           <img
//             src={logo} 
//             alt="Privana Logo"
//             className="h-16 w-32" 
//           />
//           <h1
//             className="text-center font-martel text-2xl sm:text-xl tracking-wider sm:w-full"
//             style={{ fontWeight: 600, fontSize: "33px" }}
//           >
//             PRIVANA
//           </h1>
//         </div>
//       </nav>

//       {/* First Sidebar */}
//       {isSidebarOpen && (
//         <div
//           className={`fixed top-0 left-0 z-30 h-screen w-3/4 md:w-1/3 lg:w-1/4 bg-white text-black flex flex-col items-start p-8 shadow-lg font-martel`}
//         >
//           <button
//             className="self-end text-2xl focus:outline-none mb-6"
//             onClick={toggleSidebar}
//           >
//             &#10005;
//           </button>
//           <ul className="space-y-4 text-lg">
//             {firstSidebarOptions.map((option, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between cursor-pointer py-4"
//                 onClick={() => option.content.length && openSecondSidebar(option.content)}
//               >
//                 {option.content.length > 0 ? (
//                   <>
//                     {option.label}
//                     <FaArrowRight className="text-xl ml-6" />
//                   </>
//                 ) : (
//                   // Use Link to navigate to the pages
//                   <Link to={option.link || "#"}>{option.label}</Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Second Sidebar */}
//       {isSecondSidebarOpen && (
//         <div
//           className={`fixed top-0 left-0 md:left-[19rem] lg:left-[29rem] z-40 h-screen w-3/4 md:w-1/3 lg:w-1/4 bg-green-900 text-amber-500 flex flex-col items-start p-8 shadow-lg transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "translate-x-full"
//           } font-martel`}
//         >
//           <button
//             className="self-end text-2xl focus:outline-none mb-6"
//             onClick={closeSecondSidebar}
//           >
//             &#10005;
//           </button>
//           <ul className="space-y-4 text-lg">
//             {secondSidebarContent.map((item, index) => (
//               <li key={index} className="cursor-pointer py-3">
//                 {/* Wrap each item with Link for navigation */}
//                 <Link to={`/${item.toLowerCase()}`}>{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSecondSidebarOpen, setIsSecondSidebarOpen] = useState(false);
  const [secondSidebarContent, setSecondSidebarContent] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSecondSidebarOpen) {
      setIsSecondSidebarOpen(false);
    }
  };

  const openSecondSidebar = (content) => {
    setSecondSidebarContent(content);
    setIsSecondSidebarOpen(true);
  };

  const closeSecondSidebar = () => {
    setIsSecondSidebarOpen(false);
  };

  const firstSidebarOptions = [
    {
      label: "WHO WE ARE",
      content: ["Philosophy", "Leadership", "Showcase"],
    },
    {
      label: "WHAT WE DO",
      content: ["Residential", "Commercial", "Contracting"],
    },
    {
      label: "CONTACT US",
      content: [],
      link: "/contact-us", // Add direct link to Contact Us
    },
    {
      label: "BLOG",
      content: [],
      link: "/blog", // Add direct link to Blog
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-20 w-full flex items-center justify-between px-4 py-2 text-amber-500 h-20 bg-green-900">
        <button
          className="text-amber-500 text-xl focus:outline-none w-[6.2rem]"
          onClick={toggleSidebar}
        >
          MENU &#9776;
        </button>
        
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center justify-center md:justify-center sm:justify-end md:mx-auto"
        >
          <img src={logo} alt="Privana Logo" className="h-16 w-32" />
          <h1
            className="text-center font-martel text-2xl sm:text-xl tracking-wider sm:w-full"
            style={{ fontWeight: 600, fontSize: "33px" }}
          >
            PRIVANA
          </h1>
        </Link>
      </nav>

      {/* First Sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed top-0 left-0 z-30 h-screen w-3/4 md:w-1/3 lg:w-1/4 bg-white text-black flex flex-col items-start p-8 shadow-lg font-martel`}
        >
          <button
            className="self-end text-2xl focus:outline-none mb-6"
            onClick={toggleSidebar}
          >
            &#10005;
          </button>
          <ul className="space-y-4 text-lg">
            {firstSidebarOptions.map((option, index) => (
              <li
                key={index}
                className="flex items-center justify-between cursor-pointer py-4"
                onClick={() => option.content.length && openSecondSidebar(option.content)}
              >
                {option.content.length > 0 ? (
                  <>
                    {option.label}
                    <FaArrowRight className="text-xl ml-6" />
                  </>
                ) : (
                  // Use Link to navigate to the pages
                  <Link to={option.link || "#"}>{option.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Second Sidebar */}
      {isSecondSidebarOpen && (
        <div
          className={`fixed top-0 left-0 md:left-[19rem] lg:left-[29rem] z-40 h-screen w-3/4 md:w-1/3 lg:w-1/4 bg-green-900 text-amber-500 flex flex-col items-start p-8 shadow-lg transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } font-martel`}
        >
          <button
            className="self-end text-2xl focus:outline-none mb-6"
            onClick={closeSecondSidebar}
          >
            &#10005;
          </button>
          <ul className="space-y-4 text-lg">
            {secondSidebarContent.map((item, index) => (
              <li key={index} className="cursor-pointer py-3">
                {/* Wrap each item with Link for navigation */}
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;


