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
    <div className="slide-products slide py-3">
      <div className="container">
        <div className="top-slide relative mb-4 px-5 py-4 border-b border-(--border-color) after:absolute after:-bottom-0.5 after:content-[''] after:rounded-full after:left-5 after:w-25 after:h-1 after:bg-(--main-color)">
          <h2 className="text-3xl font-bold text-(--main-color) mb-3 capitalize">
            {title}
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Swiper
          loop={true}
          centeredSlidesBounds={true}
          grabCursor={true}
          spaceBetween={20}
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
              slidesPerView: 4,
            },
          }}
          className="mySwiper h-auto overflow-hidden"
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
