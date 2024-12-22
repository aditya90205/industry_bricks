import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-20 w-full flex items-center justify-between px-4 py-2 bg-opacity-30 backdrop-blur-md text-amber-500 h-20 bg-green-900">
        <button
          className="text-amber-400 text-xl focus:outline-none w-[6.2rem]"
          onClick={toggleSidebar}
        >
          MENU &#9776;
        </button>
        <h1
          className="text-center font-martel text-2xl sm:text-xl tracking-wider sm:w-full"
          style={{
            fontWeight: 600,
            fontSize: "33px", // Matches font size
          }}
        >
          PRIVANA
        </h1>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-30 h-screen w-3/4 md:w-1/3 lg:w-1/5 bg-white text-black flex flex-col items-start p-8 shadow-lg">
          <button
            className="self-end text-2xl focus:outline-none mb-6"
            onClick={toggleSidebar}
          >
            &#10005;
          </button>
          <ul className="space-y-4 text-lg">
            <li>Home</li>
            <li>Contact</li>
            <li>Address</li>
            <li>About</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
