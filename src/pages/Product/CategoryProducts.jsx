import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "@/components/slideproducts/Product";

function CategoryProducts() {
  const { slug } = useParams(); // استقبال الـ slug من الرابط
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategoryProducts();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center font-bold text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 animate-fade-in-up">
      {/* عنوان التصنيف */}
      <div className="mb-8 border-b pb-4 capitalize">
        <h1 className="text-3xl font-bold text-gray-800">
          {slug ? slug.replace("-", " ") : "Category Products"}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Showing {products.length} available products
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No products found in this category.
        </div>
      ) : (
        // عرض المنتجات في شبكة
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;