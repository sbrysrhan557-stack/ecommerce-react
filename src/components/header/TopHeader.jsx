import React from "react";
import { Link } from "react-router";
import logo from "@/imgs/logo.png";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function TopHeader() {
  return (
    <>
      <div className="top-header">
        {/* Top Header Content */}
        <div className="container flex items-center justify-between p-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-15" />
          </Link>
          {/* Search Form */}
          <form className="search flex justify-center">
            <input
              type="text"
              id="search"
              name="search"
              className="w-100 rounded-l-full py-2 px-4 border-2 border-[var(--main-color)] bg-[var(--bg-color)] focus:outline-0"
              placeholder="Search For Products..."
            />
            <button
              type="submit"
              className="bg-[var(--main-color)] text-white p-4 rounded-r-full cursor-pointer"
            >
              <FaSearch />
            </button>
          </form>
          {/* Header Icons */}
          <div className="header-icon flex items-center gap-4">
            <div className="icon p-2 relative">
              <Link to="/">
                <FaRegHeart className="text-[var(--color-heading)] text-4xl" />
              </Link>
              <span className="count absolute top-0 right-0 bg-[var(--main-color)] text-[var(--white-color)] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <div className="icon p-2 relative">
              <Link to="/">
                <FiShoppingCart className="text-[var(--color-heading)] text-4xl" />
              </Link>
              <span className="count absolute top-0 right-0 bg-[var(--main-color)] text-[var(--white-color)] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
