import video from "../../../public/videos/video.mp4";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Header;
