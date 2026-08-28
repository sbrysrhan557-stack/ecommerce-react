import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination } from "swiper/modules";

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
        className="mySwiper w-[80%] h-full mt-10"
      >
        {info.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img
              src={slide.img}
              alt={`Hero Banner ${slide.id}`}
              className="block w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-opacity-50 px-10 max-w-[40%] h-full flex flex-col justify-center gap-4">
              <span className=" text-sm font-light  px-2 py-1">
                {slide.offer}
              </span>
              <span className="text-4xl block font-bold text-(--main-color)">
                {slide.title}
              </span>
              <p className="text-sm">{slide.description}</p>
              <button className="bg-(--main-color) text-white mt-8 text-start w-fit px-10 py-2 rounded-full hover:scale-110 transition-transform duration-300">
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
