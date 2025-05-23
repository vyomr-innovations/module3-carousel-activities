"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ThirdSlide from "./thirdSlide";
import FourthSlide from "./fourthSlide";
import FivethSlide from "./fivthSlide";
import SixthSlide from "./sixthSlide";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] p-5 flex justify-center items-center flex-col gap-5">
      <div className="w-[900px]">
        <h1 className="text-center text-4xl font-bold py-4 text-black">
          Make time for sports practice
        </h1>
        <div className="border-2 flex justify-center items-center p-2 bg-violet-100 rounded-lg min-h-[200px]">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {/* ========================== SecoundSlide ================= */}
            <SwiperSlide>
            <div className=" min-h-[450px]  p-5 flex justify-center items-center ">
                <ul className="list-decimal text-black p-8 space-y-5">
                  <li className="text-black text-2xl">
                    Group tasks that are independent or interdependent.
                  </li>
                  <li className="text-black text-2xl">
                    Categorize tasks as weekly or weekend.
                  </li>
                  <li className="text-black text-2xl">
                    Identify tasks that can wait and tasks that can be skipped.
                  </li>
                  <li className="text-black text-2xl">
                    Establish the pros and cons of doing or not doing each task
                    that is in the category “can wait” and “can be skipped”
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            {/* ========================== ThirdSlide ================= */}
            <SwiperSlide>
              <ThirdSlide />
            </SwiperSlide>
              {/* ========================== FourthSlide ================= */}
            <SwiperSlide>
              <FourthSlide />
            </SwiperSlide> 
            {/* ========================== FivethSlide ================= */}
            <SwiperSlide>
              <FivethSlide />
            </SwiperSlide>
            
             {/* ========================== SixthSlide ================= */}
            <SwiperSlide>
              <SixthSlide />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`${
              lastSlide > 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handlePrev}
            />
          </div>

          <div
            className={`${
              lastSlide < 4
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 4 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
