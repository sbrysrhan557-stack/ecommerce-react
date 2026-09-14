import React, { useContext } from "react";
import { FaStar, FaCartArrowDown, FaRegHeart, FaInfo } from "react-icons/fa6";
import { CardContext } from "@/components/context/CardContext";
import { WishlistContext } from "@/components/context/WishlistContext";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";

function Product({ item }) {
  const navigate = useNavigate();
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const { cardItems, addToCard, removeFromCard } = useContext(CardContext);

  const isInCart = cardItems.some((cartItem) => cartItem.id === item.id);
  const isFavorite = wishlistItems.some((fav) => fav.id === item.id);

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInCart) {
      // لو موجود في السلة  احذفه 
      if (typeof removeFromCard === "function") {
        removeFromCard(item.id);
        toast.info("Removed from Cart", { autoClose: 2000 });
      }
    } else {
      // لو مش موجودأضفه للسلة
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
              onClick={() => navigate("/cart")}
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

  // إضافة أو إزالة من المفضلة
  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(item);
  };

  return (
    <div
      className={`group relative max-w-full my-5 bg-(--white-color) p-4 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
        isFavorite
          ? "border-rose-500 shadow-md ring-1 ring-rose-200 hover:border-rose-500"
          : "border-(--border-color) hover:border-(--main-color)"
      }`}
    >
      {/* رابط تفاصيل المنتج*/}
      <div className="block flex-1">
        {/* Photo */}
        <div className="relative w-full h-58 sm:h-48 px-2 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-4">
          <img
            src={item.images[0]}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            alt={item.title || "Product image"}
          />

          {/* Brand or New */}
          <span className="absolute top-2 left-2 bg-(--white-color) text-(--main-color) text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
            {item.brand || "New"}
          </span>

          {/* تظهر لو المنتج موجود في السلة */}
          {isInCart && (
            <span className="absolute bottom-2 left-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md animate-fade-in">
              In Cart ✓
            </span>
          )}
        </div>

        {/* info product*/}
        <div className="info-product mt-2">
          <h4 className="product-name text-base font-bold text-gray-800 line-clamp-1 group-hover:text-(--main-color) transition-colors duration-200">
            {item.title}
          </h4>
          <p className="text-gray-500 text-xs line-clamp-2 mt-1">
            {item.description}
          </p>

          {/* التقييم والسعر */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="font-extrabold text-lg text-gray-800">
              $ {item.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
              <FaStar />
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/*  الأيقونات */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-around gap-2 z-10">
        {/* زر السلة */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCartClick(e);
          }}
          className={`flex-1 h-10 flex items-center justify-center gap-2 rounded-xl font-medium text-xs shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
            isInCart
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-100 text-gray-700 hover:bg-(--main-color) hover:text-white"
          }`}
          title={isInCart ? "Remove from Cart" : "Add to Cart"}
        >
          <FaCartArrowDown className="text-sm" />
          <span>{isInCart ? "In Cart" : "Add"}</span>
        </button>

        {/* زر المفضلة */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleWishlistClick(e);
          }}
          className={`w-10 h-10 flex items-center justify-center rounded-xl shadow-sm transition-all duration-200 hover:scale-110 active:scale-95 ${
            isFavorite
              ? "bg-rose-500 text-white hover:bg-rose-600"
              : "bg-gray-100 text-gray-600 hover:bg-rose-500 hover:text-white"
          }`}
          title={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <FaRegHeart className="text-sm" />
        </button>

        {/* زر التفاصيل */}
        <Link to={`/product/${item.id}`} className="w-10 h-10 bg-gray-100 text-gray-600 flex items-center justify-center rounded-xl shadow-sm transition-all duration-200 hover:bg-gray-800 hover:text-white hover:scale-110 active:scale-95"
          title="Quick Info"
          >
          <FaInfo className="text-sm" />
        </Link>
      </div>
    </div>
  );
}

export default Product;
