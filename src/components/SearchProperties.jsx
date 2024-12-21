// import { useState } from "react";

// const SearchProperties = () => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedProject, setSelectedProject] = useState("");

//   const cities = [
//     "Bengaluru",
//     "Chennai",
//     "Coimbatore",
//     "Delhi NCR",
//     "GIFT City Gujarat",
//     "Hyderabad",
//     "Kochi",
//     "Kozhikode",
//     "Mysore",
//     "Pune",
//     "Thiruvananthapuram",
//     "Thrissur",
//   ];

//   const projects = [
//     "Project A",
//     "Project B",
//     "Project C",
//     "Project D",
//     "Project E",
//   ];

//   const handleCityChange = (e) => setSelectedCity(e.target.value);
//   const handleProjectChange = (e) => setSelectedProject(e.target.value);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="bg-white p-8 w-full ">
//         <h2 className="text-center text-2xl mb-4">LOCATIONS</h2>
//         <div className="text-center text-gray-600 mb-2 leading-8">
//           <p>
//             We handpick locations that offer seamless connectivity, unmatched
//             return on investments, <br></br>in a neighborhood that is truly
//             one-of-a-kind.
//           </p>
//           <p>SEARCH PROPERTIES</p>
//         </div>
//         <div className="max-w-xl items-center mx-auto">
//           <div className="flex flex-col md:flex-row gap-1">
//             {/* City Dropdown */}
//             <div className="flex-1">
//               <select
//                 value={selectedCity}
//                 onChange={handleCityChange}
//                 className="w-full border p-2 "
//               >
//                 <option value="">Select City</option>
//                 {cities.map((city, index) => (
//                   <option key={index} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {/* Project Dropdown */}
//             <div className="flex-1">
//               <select
//                 value={selectedProject}
//                 onChange={handleProjectChange}
//                 className="w-full border p-2 "
//               >
//                 <option value="">Select Project</option>
//                 {projects.map((project, index) => (
//                   <option key={index} value={project}>
//                     {project}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <button
//             onClick={() =>
//               alert(`City: ${selectedCity}, Project: ${selectedProject}`)
//             }
//             className="mt-6 w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchProperties;


import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchProperties = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const cities = [
    "Bengaluru",
    "Chennai",
    "Coimbatore",
    "Delhi NCR",
    "GIFT City Gujarat",
    "Hyderabad",
    "Kochi",
    "Kozhikode",
    "Mysore",
    "Pune",
    "Thiruvananthapuram",
    "Thrissur",
  ];

  const projects = [
    "Project A",
    "Project B",
    "Project C",
    "Project D",
    "Project E",
  ];

  const handleCityChange = (e) => setSelectedCity(e.target.value);
  const handleProjectChange = (e) => setSelectedProject(e.target.value);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 w-full">
        <h2 className="text-center text-2xl mb-4">LOCATIONS</h2>
        <div className="text-center text-gray-600 mb-2 leading-8">
          <p>
            We handpick locations that offer seamless connectivity, unmatched
            return on investments, <br />
            in a neighborhood that is truly one-of-a-kind.
          </p>
          <p>SEARCH PROPERTIES</p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-1 items-center">
            {/* City Dropdown */}
            <div className="flex-1 w-full">
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="w-full border p-2 "
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            {/* Project Dropdown */}
            <div className="flex-1 w-full">
              <select
                value={selectedProject}
                onChange={handleProjectChange}
                className="w-full border p-2 "
              >
                <option value="">Select Project</option>
                {projects.map((project, index) => (
                  <option key={index} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </div>
            {/* Search Button */}
            <button
              onClick={() =>
                alert(`City: ${selectedCity}, Project: ${selectedProject}`)
              }
              className="flex items-center justify-center  bg-slate-400 text-white px-4 py-[.7rem] hover:bg-indigo-700  md:w-auto"
            >
              <FaSearch />
              <span className="inline mx-2 md:hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProperties;
