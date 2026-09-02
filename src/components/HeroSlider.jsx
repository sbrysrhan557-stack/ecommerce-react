import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import bannerHero1 from "@/imgs/banner_Hero1.jpg";
import bannerHero2 from "@/imgs/banner_Hero2.jpg";
import bannerHero3 from "@/imgs/banner_Hero3.jpg";

const info = [
  {
    id: "slide_1",
    title: "Microsoft Xbox 360 Controller",
    description:
      "Experience the ultimate gaming control with the Microsoft Xbox 360 Controller",
    img: bannerHero1,
    offer: "INTRODUCING THE NEW",
  },
  {
    id: "slide_2",
    title: "PlayStation 5 DualSense Controller",
    description:
      "Enhance your gaming experience with the PlayStation 5 DualSense Controller",
    img: bannerHero2,
    offer: "INTRODUCING THE NEW",
  },
  {
    id: "slide_3",
    title: "Nintendo Switch Pro Controller",
    description:
      "Take your Nintendo Switch gaming to the next level with the Pro Controller",
    img: bannerHero3,
    offer: "INTRODUCING THE NEW",
  },
];

function HeroSlider() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        // جعل السلايدر يأخذ العرض كاملًا في الهواتف و 80% في الشاشات الكبيرة، مع تحديد ارتفاع متجاوب
        className="mySwiper w-full md:w-[80%] h-80 sm:h-112.5 md:h-125 my-10 md:my-5 rounded-2xl overflow-hidden"
      >
        {info.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* صورة البانر */}
            <img
              src={slide.img}
              alt={`Hero Banner ${slide.id}`}
              className="block w-full h-full object-cover"
            />

            {/* صندوق النصوص والأزرار المتجاوب */}
            <div className="absolute inset-0 md:inset-auto md:top-0 md:left-0 px-6 sm:px-10 w-full md:max-w-[55%] lg:max-w-[40%] h-full flex flex-col justify-center gap-2 sm:gap-4 text-white md:text-black">
              
              {/* عرض العرض (Offer) */}
              <span className="text-xs sm:text-sm font-light px-2 py-1 text-black w-fit rounded">
                {slide.offer}
              </span>

              {/* عنوان البانر مع تحجيم متجاوب */}
              <span className="text-2xl sm:text-3xl md:text-4xl block font-bold text-(--main-color) leading-tight">
                {slide.title}
              </span>

              {/* الوصف */}
              <p className="text-xs sm:text-sm text-gray-700">
                {slide.description}
              </p>

              {/* زر التسوق */}
              <button className="bg-(--main-color) text-white mt-4 sm:mt-6 text-start w-fit px-6 sm:px-10 py-2 text-sm sm:text-base rounded-full hover:scale-105 transition-transform duration-300 shadow-md">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroSlider;