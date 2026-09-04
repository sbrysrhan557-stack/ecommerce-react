import React from "react";
import {
  FaStar,
  FaCartArrowDown,
  FaRegHeart,
  FaInfo,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router";
import { CardContext } from "../context/CardContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Product({ item }) {
  const navigate = useNavigate();
  const { cardItems, addToCard, removeFromCard } =
    React.useContext(CardContext);
  // (تأكد من اسم دالة الحذف لديك في الـ Context، لو لم تكن موجودة يمكنك عمل دالة toggle أو استخدام دالة الحذف الخاصة بك)

  const isInCart = cardItems.some((cartItem) => cartItem.id === item.id);

  // دالة للتعامل مع الضغط على زر السلة (إضافة أو إزالة)
  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInCart) {
      // لو موجود في السلة، قم بحذفه (استبدل removeFromCard بالدالة الموجودة عندك)
      if (typeof removeFromCard === "function") {
        removeFromCard(item.id);
        toast.info("Removed from Cart", { autoClose: 2000 });
      }
    } else {
      // لو مش موجود، أضفه للسلة
      addToCard(item);

      // إظهار التنبيه المخصص
      toast.success(
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-12 h-12 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-sm line-clamp-1">
              {item.title}
            </span>
            <span className="text-gray-500 text-xs">Added to Cart</span>
            <button
              onClick={() => navigate("/cart")} // عدل المسار حسب صفحة السلة لديك
              className="cursor-pointer mt-2 bg-(--main-color) text-(--white-color) text-xs py-1 px-3 rounded-full hover:opacity-90 transition-all text-center"
            >
              View Cart
            </button>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeButton: false,
          className: "bg-white shadow-lg rounded-xl border border-gray-100 p-3",
        },
      );
    }
  };

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

          {/* وسم New */}
          <span className="absolute top-2 left-2 bg-(--main-color) text-(--white-color) text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
            New
          </span>

          {/* شارة (Badge) تظهر إذا كان المنتج موجوداً في السلة */}
          {isInCart && (
            <span className="absolute bottom-2 left-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md animate-fade-in">
              In Cart ✓
            </span>
          )}
        </div>

        {/* قسم الأيقونات السريعة */}
        <div className="absolute top-20 -right-13 group-hover:right-10 sm:group-hover:right-3 flex flex-col gap-2 transition-all duration-300 ease-in-out z-10">
          {/* زر السلة الديناميكي (يتغير لونه وشكله حسب حالته في السلة) */}
          <button
            type="button"
            onClick={handleCartClick}
            className={`w-10 h-10 backdrop-blur-sm flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:scale-110 ${
              isInCart
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-(--white-color)/90 text-(--main-color) hover:bg-(--main-color) hover:text-(--white-color)"
            }`}
            title={isInCart ? "Remove from Cart" : "Add to Cart"}
          >
            <FaCartArrowDown className="text-sm" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="w-10 h-10 bg-(--white-color)/90 backdrop-blur-sm text-(--main-color) flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:bg-rose-500 hover:text-(--white-color) hover:scale-110"
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
            <span className="text-gray-600 text-xs font-semibold">
              ({item.rating || "4.5"})
            </span>
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
