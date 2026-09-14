import React, { useContext } from "react";
import { WishlistContext } from "@/components/context/WishlistContext";
import Product from "@/components/slideproducts/Product";
import { Link } from "react-router";
import { FaRegHeart, FaCartArrowDown } from "react-icons/fa6";

function Favorites() {
  const { wishlistItems } = useContext(WishlistContext);

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center gap-4 animate-fade-in-up">
        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 text-3xl">
          <FaRegHeart />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Favorites list is empty
        </h2>
        <p className="text-gray-500">
          You haven't added any products to your favorites yet.
        </p>
        <Link
          to="/accessories"
          className="mt-4 bg-(--main-color) text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
        >
          View products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 animate-fade-in-up">
      <div className="flex items-center gap-5 flex-col sm:flex-row justify-between mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 ">
          Favorite Products ({wishlistItems.length})
        </h1>

        <Link
          to="/cart"
          className="bg-(--main-color) text-(--white-color) px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Go to Cart <FaCartArrowDown className="inline-block ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
        {wishlistItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
