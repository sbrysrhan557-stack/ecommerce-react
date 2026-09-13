import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/accessories", label: "Accessories" },
  { to: "/contact", label: "Contact" },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch categories from the API when the component mounts
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // إغلاق قائمة التصنيفات عند النقر خارجها ai
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-(--white-color) border-b border-gray-100 shadow-sm relative z-40">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* قسم زر التصنيفات والقائمة الرئيسية */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
          
          {/* زر التصنيفات*/}
          <div className="relative my-2" ref={dropdownRef}>
            <div
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-3 py-2.5 px-4 cursor-pointer select-none bg-(--main-color) text-white rounded-2xl hover:opacity-95 transition-all text-sm font-bold shadow-md"
            >
              <MdOutlineMenu size={18} />
              <span>All Categories</span>
              <IoMdArrowDropdown
                className={`transition-transform duration-300 ${
                  showCategories ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* قائمة التصنيفات*/}
            {showCategories && (
              <div className="absolute top-full left-0 mt-2 w-72 max-h-80 flex flex-col overflow-y-auto bg-white text-gray-800 shadow-2xl rounded-2xl border border-gray-100 z-50 p-1">
                {categories.map((category) => (
                  <Link
                    to={`/category/${category.slug}`}
                    key={category.slug}
                    onClick={() => setShowCategories(false)}
                    className="px-4 py-2.5 rounded-xl hover:bg-gray-50 hover:text-(--main-color) transition-colors text-sm font-medium capitalize"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* روابط التنقل للشاشات الكبيرة */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-3 block text-sm font-semibold transition-all rounded-xl ${
                    location.pathname === link.to
                      ? "text-(--main-color) bg-rose-50/80"
                      : "text-gray-600 hover:text-(--main-color) hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* زر الموبايل منيو */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 text-2xl focus:outline-none bg-gray-100 rounded-xl"
          >
            {mobileMenuOpen ? <MdClose /> : <MdOutlineMenu />}
          </button>
        </div>

        {/* أزرار تسجيل الدخول / حساب المستخدم للشاشات الكبيرة */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/login" className="flex items-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl text-gray-700 hover:bg-gray-100 transition-all border border-gray-200">
            <FiUserPlus size={16} /> Login
          </Link>
          <Link to="/register" className="flex items-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-sm">
            <HiOutlineLogout size={16} /> Register
          </Link>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة بالكامل (Mobile Drawer) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl flex flex-col py-4 px-6 gap-2 z-50">
          {navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === link.to ? "bg-rose-50 text-(--main-color)" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-2 flex items-center justify-between gap-3">
            <Link 
              to="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 border border-gray-200 rounded-xl text-gray-700"
            >
              <FiUserPlus /> Login
            </Link>
            <Link 
              to="/register" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 bg-gray-900 text-white rounded-xl"
            >
              <HiOutlineLogout /> Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default BtmHeader;