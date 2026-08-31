import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "@/components/slideproducts/Product";
import "@/components/slideproducts/SlideProduct.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function SlideProduct({data = [], title }) {
  return (
    <div className="slide-products slide py-5">
      <div className="container">
        <div className="top-slide relative mb-4 px-5 py-4 border-b border-(--border-color)">
          <h2 className="text-3xl font-bold text-(--main-color) mb-3 capitalize">
            {title}
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Swiper
          loop={true}
          slidesPerView={5}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper h-90  "
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
