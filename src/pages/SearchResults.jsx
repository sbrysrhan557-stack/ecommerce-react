import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import Product from "@/components/slideproducts/Product";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineNotInterested } from "react-icons/md";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // استخراج الكلمة المكتوبة
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching search results:", err);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Results for <span className="text-(--main-color)">"{query}"</span>
      </h2>

      {loading ? (
        <p className="text-center py-10">Loading...</p>
      ) : products.length === 0 ? (
        <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-3xl">
            <MdOutlineNotInterested />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            No products found for Search
          </h2>
          <p className="text-gray-500">
            We couldn't find any products matching your search query. Please try
            again with different keywords.
          </p>
          <Link
            to="/accessories"
            className="mt-4 bg-(--main-color) text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Go Back to Accessories{" "}
            <FaShoppingBag className="inline-block ml-2" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
