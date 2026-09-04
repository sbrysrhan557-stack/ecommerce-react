import ProductDetailsLoading from "@/components/Loading/ProductDetailsLoading";
import SlideProduct from "@/components/slideproducts/SlideProduct";
import SlideProductLoading from "@/components/slideproducts/SlideProductLoading";
import { useState, useEffect, useContext } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaCartShopping, FaShareNodes, FaCheck } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router"; // تأكد من استيراد useNavigate
import { CardContext } from "@/components/context/CardContext";
import { toast } from "react-toastify"; // تأكد من استيراد مكتبة الـ toast

// Swiper Style
import "swiper/css";
import "swiper/css/navigation";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // تهيئة الـ navigate
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(true);

  const { cardItems, addToCard, removeFromCard } = useContext(CardContext);
  const isInCart = product
    ? cardItems.some((item) => item.id === product.id)
    : false;

  // دالة التعامل مع زر السلة (إضافة أو إزالة مع التنبيه)
  const handleCartClick = () => {
    if (isInCart) {
      removeFromCard(product.id);
      toast.info("Removed from Cart", { autoClose: 2000 });
    } else {
      addToCard(product);

      // إظهار التنبيه المخصص
      toast.success(
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-12 h-12 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-sm line-clamp-1">
              {product.title}
            </span>
            <span className="text-gray-500 text-xs">Added to Cart</span>
            <button
              onClick={() => navigate("/cart")}
              className="cursor-pointer mt-2 bg-(--main-color) text-white text-xs py-1 px-3 rounded-full hover:opacity-90 transition-all text-center"
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

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);

        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        if (data.category) {
          const categoryRes = await fetch(
            `https://dummyjson.com/products/category/${data.category}`,
          );
          const categoryData = await categoryRes.json();
          const filtered = categoryData.products.filter(
            (item) => item.id !== data.id,
          );
          setRelatedProducts(filtered);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setLoadingCategory(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) return <ProductDetailsLoading />;
  if (!product)
    return <p className="text-center py-10 font-bold">Product Not Found</p>;

  return (
    <div className="py-10 w-full">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* قسم معرض الصور */}
        <div className="flex md:flex-col flex-row items-center gap-6 order-2 md:order-1">
          <div className="w-full max-w-78.5 h-100 flex items-center justify-center p-4 rounded-xl border border-(--main-color) shadow-md bg-(--white-color)">
            <img
              src={selectedImage || product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
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

        {/* قسم تفاصيل المنتج */}
        <div className="flex flex-col gap-4 text-gray-700 order-1 md:order-2">
          <h1 className="text-3xl font-bold text-(--main-color)">
            {product.title}
          </h1>

          <div className="flex items-center gap-1 text-yellow-400 text-lg">
            <FaStar /> <p className="font-bold">{product.rating}</p>
          </div>

          <div className="text-2xl font-semibold text-gray-800">
            $ {product.price}
          </div>

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

          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mt-2">
            {product.description}
          </p>

          <p className="text-(--main-color) font-medium text-sm mt-1">
            Hurry Up! Only {product.stock} products left in stock.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {/* زر سلة المشتريات */}
            <button
              onClick={handleCartClick}
              className={`flex items-center justify-center gap-2 cursor-pointer font-medium py-3 px-6 rounded-lg transition-all duration-200 w-fit ${
                isInCart
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
                  : "bg-(--main-color) hover:bg-[color-mix(in_srgb,var(--main-color),black_15%)] text-(--white-color)"
              }`}
            >
              {isInCart ? (
                <>
                  Remove From Cart <FaCheck />
                </>
              ) : (
                <>
                  Add To Cart <FaCartShopping />
                </>
              )}
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

      {loadingCategory ? (
        <div className="mt-16">
          <SlideProductLoading />
        </div>
      ) : (
        relatedProducts.length > 0 && (
          <div className="mt-16 mx-0">
            <SlideProduct
              key={product.category}
              data={relatedProducts}
              title={`${product.category.replace("-", " ") || "Related Products"}`}
              className="w-full"
            />
          </div>
        )
      )}
    </div>
  );
}

export default ProductDetails;
