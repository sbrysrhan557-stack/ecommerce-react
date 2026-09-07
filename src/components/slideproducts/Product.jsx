import React, { useContext } from "react";
import { FaStar, FaCartArrowDown, FaRegHeart, FaInfo } from "react-icons/fa6";
import { CardContext } from "@/components/context/CardContext";
import { WishlistContext } from "@/components/context/WishlistContext";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";

function Product({ item }) {
  const navigate = useNavigate();
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const { cardItems, addToCard, removeFromCard } =
    React.useContext(CardContext);
  // (تأكد من اسم دالة الحذف لديك في الـ Context، لو لم تكن موجودة يمكنك عمل دالة toggle أو استخدام دالة الحذف الخاصة بك)

  const isInCart = cardItems.some((cartItem) => cartItem.id === item.id);
  const isFavorite = wishlistItems.some((fav) => fav.id === item.id);

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

  // دالة للتعامل مع الضغط على زر المفضلة (إضافة أو إزالة)
  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(item);
  };

  return (
    <div
      className={`group relative m-w-full my-5 bg-(--white-color) p-4 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isFavorite
          ? "border-rose-500 shadow-md ring-1 ring-rose-200 hover:border-rose-500"
          : "border-(--border-color) hover:border-(--main-color)"
      }`}
    >
      {/* رابط تفاصيل المنتج */}
      <Link to={`/product/${item.id}`} className="block">
        {/* قسم الصورة مع تأثير Zoom */}
        <div className="relative w-full h-58 sm:h-48 px-2 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-4">
          <img
            src={item.images[0]}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            alt={item.title || "Product image"}
          />

          {/* Brand */}
          <span className="absolute top-2 left-2 bg-(--white-color) text-(--main-color) text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
            {item.brand || "New"}
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
            onClick={handleWishlistClick}
            className={`w-10 h-10 backdrop-blur-sm flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:scale-110 ${
              isFavorite
                ? "bg-rose-500 text-white hover:bg-rose-600"
                : "bg-(--white-color)/90 text-(--main-color) hover:bg-rose-500 hover:text-white"
            }`}
            title={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
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
          <p className="text-gray-500 text-xs line-clamp-2 mt-1">
            {item.description}
          </p>

          {/* التقييم  والسعر*/}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="font-extrabold text-lg text-gray-800">
              $ {item.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
              <FaStar />
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
