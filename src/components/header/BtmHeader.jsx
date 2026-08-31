import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/accessories", label: "Accessories" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function BtmHeader() {
  const location = useLocation();

  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="btm-header bg-(--main-color) text-white">
        <div className="container flex items-center justify-between">
          <nav className="nav flex items-center gap-4">
            <div className="category-nav relative px-4">
              {/* Category Button */}
              <div
                onClick={() => setShowCategories(!showCategories)}
                className="category-btn  flex items-center justify-between gap-2 py-4 cursor-pointer"
              >
                <MdOutlineMenu />
                <span className="font-bold">All Categories</span>
                <IoMdArrowDropdown
                  className={`transition-transform duration-300 ${
                    showCategories ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Category List */}
              {showCategories && (
                <div className="category-nav-list absolute top-full left-0 w-full max-h-80 flex flex-col overflow-y-auto border border-gray-300 bg-(--white-color) text-(--color-heading) z-50 ">
                  {categories.map((category) => (
                    <Link
                      to={category.slug}
                      key={category.slug}
                      className="cursor-pointer border-b border-gray-300 p-2 hover:bg-gray-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <ul className="nav-links flex items-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.to}
                  className={
                    location.pathname === link.to
                      ? "bg-[color-mix(in_srgb,var(--main-color)_80%,black)] py-4"
                      : "bg-(--main-color) py-4"
                  }
                >
                  <Link
                    to={link.to}
                    key={link.to}
                    style={{ color: "var(--white-color)" }}
                    className="cursor-pointer px-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login/Register Icons */}
          <div className="sign-regs-icon flex items-center gap-4">
            <Link to="/login" className="cursor-pointer text-2xl">
              <FiUserPlus className="text-(--white-color)" />
            </Link>
            <Link to="/register" className="cursor-pointer text-2xl">
              <HiOutlineLogout className="text-(--white-color)" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BtmHeader;
