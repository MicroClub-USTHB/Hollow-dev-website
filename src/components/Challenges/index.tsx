import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the main Swiper CSS
import "swiper/css/navigation"; // Import the Navigation module CSS
import "swiper/css/pagination"; // Import the Pagination module CSS
import "styled-jsx";
import { Navigation, Pagination } from "swiper/modules";

const challenges = [
  {
    image: "/src/assets/challenge01.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor2 to-customColor1",
    buttonBg: "bg-brown_button",
  },
  {
    image: "/src/assets/challenge02.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightblue to-customColor_darckblue",
    buttonBg: "bg-black_button",
  },
  {
    image: "/src/assets/challenge03.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightpurpule to-customColor_darckpurpule",
    buttonBg: "bg-purprle_button",
  },
  {
    image: "/src/assets/challenge04.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightgreen to-customColor_darckgreen",
    buttonBg: "bg-green_button",
  },
  {
    image: "/src/assets/challenge 05.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightpurpule to-customColor_darckpurpule",
    buttonBg: "bg-purprle_button",
  },
  {
    image: "/src/assets/challenge06.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightblue to-customColor_darckblue",
    buttonBg: "bg-black_button",
  },
  {
    image: "/src/assets/challenge07.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor_lightgreen to-customColor_darckgreen",
    buttonBg: "bg-green_button",
  },
  {
    image: "/src/assets/challenge08.png",
    title: "Challenge Details",
    description: "More details",
    bgGradient: "from-customColor2 to-customColor1",
    buttonBg: "bg-brown_button",
  },
  {
    image: "/src/assets/challenge09.png",
    title: "Challenge Details",
    description: "More details ",
    bgGradient: "from-customColor_lightblue to-customColor_darckblue",
    buttonBg: "bg-black_button",
  },
];

const ChallengesItems: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3); /* Grey bullets */
          width: 20px;
          height: 6px;
          border-radius: 10px;
          margin: 0 4px; /* Space between bullets */
        }

        .swiper-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 0.7); /* White active bullet */
          width: 20px;
          height: 6px;
          border-radius: 10px;
        }
      `}</style>
      <h2 className="text-center text-white text-3xl mb-9 mt-14">CHALLENGES</h2>
      <img
        src="/src/assets/image 99.png"
        alt="Challenge"
        className="mx-auto mt-0 pt-0"
      />
      <div className="py-8 px-4 bg-black">
        <div className="-mb-48 pb-52">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={3}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {challenges.map((challenge, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-[350px] h-[350px] bg-gradient-to-r ${challenge.bgGradient} rounded-lg shadow-lg overflow-hidden mx-auto`}
                >
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-white text-lg mt-5">
                      {challenge.title}
                    </h3>
                    <button
                      className={`mt-10 px-4 py-2 ${challenge.buttonBg} text-white rounded-2xl text-xs  border border-white`}
                    >
                      {challenge.description}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ChallengesItems;
