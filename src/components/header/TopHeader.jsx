import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; 
import logo from "@/imgs/logo.png";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CardContext } from "../context/CardContext";
import { WishlistContext } from "@/components/context/WishlistContext";

function TopHeader() {
  const { cardItems } = React.useContext(CardContext);
  const { wishlistItems } = React.useContext(WishlistContext);
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate(); 

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; 
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  return (
    <div className="bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 md:h-12 object-contain" />
        </Link>
        
        {/* شريط البحث*/}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-lg mx-auto">
          <div className="flex w-full items-center bg-gray-50 border border-gray-200/80 rounded-2xl overflow-hidden focus-within:border-(--main-color) focus-within:bg-white transition-all shadow-inner">
            <span className="pl-4 text-gray-400">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full py-2.5 px-3 bg-transparent text-sm focus:outline-none text-(--main-color)"
              placeholder="Search for products..."
            />
            <button
              type="submit"
              className="bg-(--main-color) text-white px-6 py-2.5 m-1 rounded-xl text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Favorite and Cart الأيقونات */}
        <div className="flex items-center gap-3">
          <Link 
            to="/favorites" 
            className="relative p-2.5 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all border border-gray-100"
            title="Wishlist"
          >
            <FaRegHeart className="text-xl" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-(--main-color) text-white text-[10px] font-extrabold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link 
            to="/cart" 
            className="relative p-2.5 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all border border-gray-100"
            title="Cart"
          >
            <FiShoppingCart className="text-xl" />
            {cardItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-(--main-color) text-white text-[10px] font-extrabold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
                {cardItems.length}
              </span>
            )}
          </Link>
        </div>

      </div>

      {/* شريط البحث الخاص بالموبايل */}
      <div className="block md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="flex w-full items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full py-2 px-4 bg-transparent text-xs focus:outline-none"
            placeholder="Search products..."
          />
          <button
            type="submit"
            className="bg-(--main-color) text-white px-4 py-2 cursor-pointer text-xs font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default TopHeader;