import React, { useEffect, useState } from "react";
import Product from "@/components/slideproducts/Product";

function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  // جلب التصنيفات والمنتجات عند تحميل الصفحة
  useEffect(() => {
    // جلب التصنيفات
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    // جلب المنتجات
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  const fetchByCategory = async (slug) => {
    setSelectedCategory(slug);
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${slug}`,
      );
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching category products:", err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div>
            <span className="bg-rose-50 text-(--main-color) text-xs font-bold px-4 py-1.5 rounded-full border border-rose-100 shadow-sm">
              Our Collection
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2">
              Accessories & Products
            </h1>
          </div>
          <p className="text-gray-500 text-sm max-w-md">
            Explore our wide range of high-quality accessories designed to match
            your modern lifestyle.
          </p>
        </div>

        {/*All Products*/}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => {
              fetchAllProducts();
              setSelectedCategory("all");
            }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-(--main-color) text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Products
          </button>
          {categories.slice(0, 8).map((cat) => (
            <button
              key={cat.slug}
              onClick={() => fetchByCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all capitalize cursor-pointer ${
                selectedCategory === cat.slug
                  ? "bg-(--main-color) text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* عرض المنتجات */}
        {loading ? (
          <div className="text-center py-24 text-gray-400 font-semibold text-lg">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 text-gray-400 font-semibold text-lg">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Product key={product.id} item={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accessories;
