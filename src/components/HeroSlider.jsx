import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";
import heroImg from "@/imgs/heroImage.png";

function HeroSection() {
  return (
    <div className="relative bg-linear-to-br py-12 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* قسم النصوص والعناوين */}
          <div className="flex flex-col gap-6 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-(--main-color) px-4 py-1.5 rounded-full text-xs font-bold w-fit mx-auto lg:mx-0 border border-rose-100 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-(--main-color) animate-pulse"></span>
              Hot Deals This Week - Up to 50% Off
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-(--black-color) leading-tight">
              Discover <span className="text-(--main-color)">Quality</span> Products For Your <span className="text-(--main-color)">Lifestyle</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Shop the latest authentic products at the best prices. Enjoy a fast, 
              secure shopping experience with speedy doorstep delivery and continuous technical support.
            </p>

            {/* أزرار الاتصال والتوجيه */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <Link
                to="/accessories"
                className="w-full sm:w-auto bg-(--main-color) text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Shop Now</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 font-bold py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-all text-center shadow-sm"
              >
                Learn More
              </Link>
            </div>

            {/* إحصائيات مصغرة أو مميزات سريعة تحت الأزرار */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/60 mt-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-extrabold text-(--main-color)">10K+</span>
                <span className="text-(--p-color) text-xs font-bold">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-gray-200 px-2">
                <span className="text-2xl font-extrabold text-(--main-color)">4.9</span>
                <span className="text-(--p-color) text-xs font-bold">Store Rating</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-extrabold text-(--main-color)">24/7</span>
                <span className="text-(--p-color) text-xs font-bold">Support</span>
              </div>
            </div>
          </div>

          {/* قسم الصورة والرسوم البصرية */}
          <div className="relative flex items-center justify-center">
            {/* خلفية جمالية متوهجة خلف الصورة */}
            <div className="absolute w-72 h-72 sm:w-86 sm:h-86 bg-[color-mix(in_srgb,var(--main-color)_15%,transparent)] rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={heroImg} // ضع هنا صورة منتج مميز أو صورة تعبيرية e-commerce
                alt="Hero Illustration"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* مميزات سريعة أسفل الـ Hero (Features Bar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-(--main-color) text-(--white-color) flex items-center justify-center text-xl shrink-0">
              <FaShippingFast />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Free Shipping</h4>
              <p className="text-gray-500 text-xs mt-0.5">On all orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-(--main-color) text-(--white-color) flex items-center justify-center text-xl shrink-0">
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Secure Payment</h4>
              <p className="text-gray-500 text-xs mt-0.5">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-(--main-color) text-(--white-color) flex items-center justify-center text-xl shrink-0">
              <FaHeadset />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">24/7 Support</h4>
              <p className="text-gray-500 text-xs mt-0.5">Dedicated support team</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;