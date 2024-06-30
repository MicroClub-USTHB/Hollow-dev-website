import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the main Swiper CSS
import "swiper/css/navigation"; // Import the Navigation module CSS
import "swiper/css/pagination"; // Import the Pagination module CSS
import "styled-jsx";
import { Navigation, Pagination } from "swiper/modules";
import Up from "../../assets/faq-up.png";
import Down from "../../assets/faq-down.png";
import { challenges } from "../../utils/data";
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
      <div id="challenges" className="flex items-center flex-col gap-2 mb-16">
        <img src={Up} className="w-80" />
        <h1 className="text-xl text-center">Challenges</h1>
        <img src={Down} className="w-64" />
      </div>
      <div className="py-8 bg-black">
        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={3}
            navigation
            autoplay={{ delay: 2000 }}
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
