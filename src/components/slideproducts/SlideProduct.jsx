import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "@/components/slideproducts/Product";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function SlideProduct({data = [], title }) {
  return (
    <div className="slide-products slide py-5">
      <div className="container">
        <div className="top-slide relative mb-4 px-5 py-4 border-b border-(--border-color) after:absolute after:bottom-[-2px] after:content-[''] after:rounded-full after:left-[20px] after:w-[100px] after:h-[4px] after:bg-(--main-color)">
          <h2 className="text-3xl font-bold text-(--main-color) mb-3 capitalize">
            {title}
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Swiper
          loop={true}
          centeredSlides={true}       // هذه الخاصية تجعل المنتج الفعّال في المنتصف
          centeredSlidesBounds={true}
          grabCursor={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper h-100 sm:h-90 overflow-hidden"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
