import image12 from "../../../public/images/image12.jpg";
import image13 from "../../../public/images/image13.jpg";
import image14 from "../../../public/images/image14.jpg";

const AboutPrivanaCards = () => {
  const cards = [
    {
      title: "MEDIA CENTRE",
      description:
        "A one touch source for news from the media lens. Get access to our brand assets – newsletters, press kit, and more. Please check our media center.",
      link: "/media-centre",
      imageAlt: "Media Centre",
      imageSrc: `${image12}`, 
    },
    {
      title: "PRIVANA PRIVILEGE",
      description:
        "A one-of-a-kind rewards programme, Privana Privilege is feature loaded. Welcome your friends and relatives to the privana family and get rewarded too.",
      link: "/privana-privilege", // Replace with your route
      imageAlt: "privana Privilege",
      imageSrc: `${image13}`, // Replace with the image URL
    },
    {
      title: "PRIVANA BLOG",
      description:
        "Get latest insights from the construction sector and in-depth views on real estate investment avenues, and more from our thought leaders.",
      link: "/privana-blog", // Replace with your route
      imageAlt: "privana Blog",
      imageSrc: `${image14}`, // Replace with the image URL
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-2xl mb-4">MORE ABOUT PRIVANA</h2>
      <p className="text-center text-gray-600 mb-12">
        Builders in Bangalore - Real Estate Company in India
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl lg:max-w-[103rem] mx-auto bg-white">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center px-2 py-1">
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-6 start">
              <h3 className="text-gray-700    text-lg mt-2 pb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              {/* Link */}
              <a
                href={card.link}
                className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                FIND OUT MORE
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPrivanaCards;
