// Header.jsx
import { useState } from "react";
import video from "../../public/videos/video.mp4";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="relative w-full h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-20 w-full flex items-center justify-between px-4 py-2 bg-opacity-30 backdrop-blur-md text-white h-20 bg-black">
          <button
            className="text-white text-xl focus:outline-none w-[6.2rem]"
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

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video} // Replace with the actual video file path
          autoPlay
          loop
          muted
        />
      </header>
    </>
  );
};

export default Header;
