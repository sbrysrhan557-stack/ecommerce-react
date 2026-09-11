import React from "react";
import { Link, useNavigate } from "react-router";
import { FaHome, FaArrowLeft } from "react-icons/fa";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        {/* 404 */}
        <div className="relative flex items-center justify-center">
          <div className="text-9xl font-extrabold text-gray-100 select-none">
            404
          </div>
        </div>

        {/* الكلام*/}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            The page you are looking for may have been moved or deleted, or the
            link is incorrect. Please check the link or return to the homepage.
          </p>
        </div>

        {/* أزرار التنقل */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
          <Link
            to="/"
            className="w-full sm:w-1/2 bg-(--main-color) text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaHome /> Home Page
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-1/2 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
