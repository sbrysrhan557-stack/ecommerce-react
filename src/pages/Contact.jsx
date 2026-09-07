import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (
    <div className="bg-white text-gray-800 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-4 mb-16">
          <span className="bg-rose-50 text-(--main-color) text-xs font-bold px-4 py-1.5 rounded-full w-fit mx-auto border border-rose-100 shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            We'd Love To Hear From <span className="text-(--main-color)">You</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Have any questions, feedback, or inquiries? Fill out the form below or reach out to our team directly, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Information */}
          <div className="lg:col-span-5 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-500 text-sm">
                Say something to us or visit our office during working hours.
              </p>
            </div>

            <ul className="flex flex-col gap-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center shrink-0 text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Location</h4>
                  <p className="text-gray-500 mt-0.5">123 Tayaran, Nasr City, Egypt</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center shrink-0 text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone Number</h4>
                  <p className="text-gray-500 mt-0.5">+20 123 456 7890</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-(--main-color) shadow-sm flex items-center justify-center shrink-0 text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Address</h4>
                  <p className="text-gray-500 mt-0.5">support@gmail.com</p>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Working Hours: Every Day (9:00 AM - 6:00 PM)
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;