import React from "react";
import { FaStar, FaCartArrowDown, FaRegHeart, FaInfo } from "react-icons/fa6";
import { Link } from "react-router";

function Product({ item }) {
  return (
    <div className="group relative w-full sm:w-57.5 bg-(--white-color) p-4 border border-(--border-color) rounded-2xl overflow-hidden transition-all duration-300 hover:border-(--main-color) hover:shadow-xl hover:-translate-y-1">
      
      {/* رابط تفاصيل المنتج */}
      <Link to={`/product/${item.id}`} className="block">
        
        {/* قسم الصورة مع تأثير Zoom */}
        <div className="relative w-full h-58 sm:h-48 px-2 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-4">
          <img
            src={item.images[0]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={item.title || "Product image"}
          />
          
          {/* {خصائص اختيارية: وسم خصم أو جديد لو أردت} */}
          <span className="absolute top-2 left-2 bg-(--main-color) text-(--white-color) text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
            New
          </span>
        </div>

        {/* قسم الأيقونات السريعة (تظهر بانزلاق سلس عند الـ Hover على الكارت) */}
        <div className="absolute top-20 -right-13 group-hover:right-10 sm:group-hover:right-3 flex flex-col gap-2 transition-all duration-300 ease-in-out z-10">
          <button 
            type="button"
            className="w-10 h-10 bg-(--white-color)/90 backdrop-blur-sm text-(--main-color) flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:bg-(--main-color) hover:text-(--white-color) hover:scale-110"
            title="Add to Cart"
          >
            <FaCartArrowDown className="text-sm" />
          </button>
          
          <button 
            type="button"
            className="w-10 h-10 bg-(--white-color)/90 backdrop-blur-sm text-(--main-color)] flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:bg-rose-500 hover:text-(--white-color) hover:scale-110"
            title="Add to Wishlist"
          >
            <FaRegHeart className="text-sm" />
          </button>
          
          <button 
            type="button"
            className="w-10 h-10 bg-(--white-color)/90 backdrop-blur-sm text-(--main-color) flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:bg-gray-800 hover:text-(--white-color) hover:scale-110"
            title="Quick Info"
          >
            <FaInfo className="text-sm" />
          </button>
        </div>

        {/* معلومات المنتج */}
        <div className="info-product mt-2">
          <h4 className="product-name text-base font-bold text-gray-800 line-clamp-1 group-hover:text-(--main-color) transition-colors duration-200">
            {item.title}
          </h4>
          
          {/* التقييم */}
          <div className="stars py-1.5 flex items-center text-sm gap-1 text-yellow-400">
            <FaStar /> 
            <span className="text-gray-600 text-xs font-semibold">({item.rating || "4.5"})</span>
          </div>

          {/* السعر */}
          <div className="flex items-center justify-between mt-1">
            <p className="price-product text-lg font-extrabold text-(--main-color)">
              $ {item.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;