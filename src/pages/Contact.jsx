import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // إرسال الرسالة بنجاح
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // إخفاء رسالة النجاح بعد 4 ثوانٍ
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    console.log("Form submit", formData);
  };

  return (
    <div className="bg-white text-gray-800 py-12 lg:py-20 animate-fade-in-up">
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
              <h3 className="text-xl font-bold text-(--main-color) mb-2">Contact Information</h3>
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

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-xl font-bold text-(--main-color) mb-6">Send Us A Message</h3>

            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-600 text-xs font-semibold p-4 rounded-xl text-center">
                Your message has been sent successfully! We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sabry Saleh"
                    required
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@gmail.com"
                    required
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="4"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color) resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 bg-(--main-color) text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                <FaPaperPlane size={14} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;