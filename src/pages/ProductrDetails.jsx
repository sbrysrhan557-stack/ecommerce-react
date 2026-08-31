import SlideProduct from "@/components/slideproducts/SlideProduct";
import { useState, useEffect } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaCartShopping, FaShareNodes } from "react-icons/fa6";
import { useParams } from "react-router";

// Swiper Style
import "swiper/css";
import "swiper/css/navigation";

function ProductDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        // 1. جلب بيانات المنتج الحالي
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);

        // تعيين الصورة الأولى كصورة رئيسية افتراضياً
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        // 2. جلب المنتجات المشابهة بناءً على فئة المنتج (Category)
        if (data.category) {
          const categoryRes = await fetch(
            `https://dummyjson.com/products/category/${data.category}`,
          );
          const categoryData = await categoryRes.json();
          // استبعاد المنتج الحالي من السلايدر
          const filtered = categoryData.products.filter(
            (item) => item.id !== data.id,
          );
          setRelatedProducts(filtered);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) return <p className="text-center py-10 font-bold">Loading...</p>;
  if (!product)
    return <p className="text-center py-10 font-bold">Product Not Found</p>;

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* قسم معرض الصور (الجزء الأيسر) */}
        <div className="flex flex-col items-center gap-6">
          {/* الصورة الرئيسية */}
          <div className="w-full max-w-78.5 h-112.5 flex items-center justify-center p-4 rounded-xl border border-(--border-color) shadow-sm bg-(--white-color)">
            <img
              src={selectedImage || product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* الصور المصغرة Thumbnails */}
          <div className="flex gap-4">
            {product.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-24 p-2 rounded-lg border transition-all duration-200 bg-(--white-color) cursor-pointer ${
                  selectedImage === img
                    ? "border-(--main-color) ring-2 ring-sky-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`thumbnail-${index}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* قسم تفاصيل المنتج (الجزء الأيمن) */}
        <div className="flex flex-col gap-4 text-gray-700">
          <h1 className="text-3xl font-bold text-(--main-color)">
            {product.title}
          </h1>

          {/* التقييم */}
          <div className="flex items-center gap-1 text-yellow-400 text-lg">
            <FaStar /> <p className="font-bold">{product.rating}</p>
          </div>

          {/* السعر */}
          <div className="text-2xl font-semibold text-gray-800">
            $ {product.price}
          </div>

          {/* حالة التوفر والبراند */}
          <div className="flex flex-col gap-1 text-sm font-medium">
            <p className="text-gray-600">
              Availability:{" "}
              <span className="text-(--main-color)">
                {product.availabilityStatus}
              </span>
            </p>
            <p className="text-gray-600">
              Brand:{" "}
              <span className="text-(--main-color)">{product.brand}</span>
            </p>
          </div>

          {/* الوصف */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mt-2">
            {product.description}
          </p>

          {/* التنبيه بوجود كمية محدودة */}
          <p className="text-(--main-color) font-medium text-sm mt-1">
            Hurry Up! Only {product.stock} products left in stock.
          </p>

          {/* أزرار الإجراءات (الإضافة للسلة، المفضلة، المشاركة) */}
          <div className="flex flex-col gap-4 mt-4">
            <button className="flex items-center justify-center gap-2 cursor-pointer bg-(--main-color) hover:bg-[color-mix(in_srgb,var(--main-color),black_15%)] text-(--white-color) font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-fit">
              Add To Cart <FaCartShopping />
            </button>

            <div className="flex items-center gap-3">
              <button
                title="Add to Wishlist"
                className="w-10 h-10 rounded-full cursor-pointer bg-sky-50 hover:bg-sky-100 text-(--main-color) flex items-center justify-center transition-colors duration-200"
              >
                <FaRegHeart className="text-lg" />
              </button>
              <button
                title="Share"
                className="w-10 h-10 cursor-pointer rounded-full bg-sky-50 hover:bg-sky-100 text-(--main-color) flex items-center justify-center transition-colors duration-200"
              >
                <FaShareNodes className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* عرض السلايدر للمنتجات المشابهة في نفس الفئة */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <SlideProduct
            data={relatedProducts}
            title={`${product.category.replace("-", " ")}`}
            className="w-full"
            spaceBetween={54}
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
