import React from "react";
import { Link } from "react-router";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-white text-gray-800 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 mb-16">
          <span className="bg-rose-50 text-(--main-color) text-xs font-bold px-4 py-1.5 rounded-full w-fit mx-auto border border-rose-100 shadow-sm">
            About Our Store
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            We Provide The Best{" "}
            <span className="text-(--main-color)">Shopping</span> Experience For
            You
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Welcome to our store, your ultimate destination for modern lifestyle
            accessories and top-quality products. We are committed to bringing
            you the best items with unmatched service and reliability.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center text-2xl">
              <FaAward />
            </div>
            <h3 className="font-bold text-lg text-gray-900">High Quality</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We source only the finest products to ensure ultimate satisfaction
              and durability for our customers.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center text-2xl">
              <FaShippingFast />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Fast Shipping</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enjoy quick and secure delivery services straight to your doorstep
              on all orders.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center text-2xl">
              <FaShieldAlt />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Secure Payment</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Shop with absolute peace of mind using our 100% secure and
              encrypted payment gateways.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center text-2xl">
              <FaHeadset />
            </div>
            <h3 className="font-bold text-lg text-gray-900">24/7 Support</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our dedicated customer support team is always ready to assist you
              with any questions or inquiries.
            </p>
          </div>
        </div>

        {/*Stats Section */}
        <div className="bg-(--footer-color) text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl sm:text-4xl font-black text-(--main-color)">
              10K+
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Active Customers
            </p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-black text-(--main-color)">
              500+
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Quality Products
            </p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-black text-(--main-color)">
              99%
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Satisfaction Rate
            </p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-black text-(--main-color)">
              24/7
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Customer Support
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready to explore our collections?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/accessories"
              className="bg-(--main-color) text-white font-bold py-3.5 px-8 rounded-2xl shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              <span>Shop Now</span>
              <FaArrowRight />
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-700 font-bold py-3.5 px-8 rounded-2xl hover:bg-gray-200 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
