import React, { useState, useContext } from "react";
import { CardContext } from "@/components/context/CardContext";
import { Link, useNavigate } from "react-router";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShoppingBag,
  FaInfo,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

function Cart() {
  const { cardItems, addToCard, decreaseQuantity, removeFromCard, clearCart } =
    useContext(CardContext);

  const navigate = useNavigate();

  // حالات التحكم في نافذة الـ Checkout
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [shippingData, setShippingData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
  });

  // حساب الإجمالي الكلي
  const totalPrice = cardItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  const handleInputChange = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! 🎉");
    clearCart();
    setIsCheckoutOpen(false);
    navigate("/");
  };

  if (cardItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center gap-4 animate-fade-in-up">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-3xl">
          <FaShoppingBag />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Your shopping cart is empty.
        </h2>
        <p className="text-gray-500">
          You haven't added any products to the cart yet.
        </p>
        <Link
          to="/accessories"
          className="mt-4 bg-(--main-color) text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 relative animate-fade-in-up">
      {/* رأس الصفحة */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Your Shopping Cart
        </h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-semibold transition-colors bg-red-50 px-4 py-2 rounded-lg border border-red-200 cursor-pointer"
        >
          <FaTrash /> Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* قائمة المنتجات */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm gap-4 transition-all hover:shadow-md"
            >
              {/* الصورة + التفاصيل */}
              <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 p-2 flex items-center justify-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                  <Link
                    to={`/product/${item.id}`}
                    className="absolute top-1 left-1"
                  >
                    <span
                      className="w-6 h-6 bg-(--main-color) text-white flex items-center justify-center rounded-full shadow transition-transform hover:scale-110 text-xs"
                      title="View Product"
                    >
                      <FaInfo size={10} />
                    </span>
                  </Link>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-(--main-color) font-extrabold text-sm sm:text-base">
                    $ {item.price}
                  </span>
                </div>
              </div>

              {/* أزرار التحكم والارقام */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-6 h-6 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <FaMinus size={9} />
                  </button>
                  <span className="font-bold text-gray-800 w-6 text-center text-sm">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => addToCard(item)}
                    className="w-6 h-6 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <FaPlus size={9} />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-gray-800 text-base sm:text-lg min-w-17.5 text-end">
                    $ {(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCard(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer"
                    title="Delete product"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex flex-col gap-5 sticky top-40">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h3>

          <div className="flex justify-between items-center text-gray-600 text-sm">
            <span>Number of Products:</span>
            <span className="font-bold text-gray-800">
              {cardItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}{" "}
              Product
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-600 text-sm">
            <span>Subtotal:</span>
            <span className="font-bold text-gray-800">
              $ {totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-600 text-sm border-b pb-4">
            <span>Shipping:</span>
            <span className="text-green-600 font-bold">Free</span>
          </div>

          <div className="flex justify-between items-center text-lg font-extrabold text-gray-800">
            <span>Total:</span>
            <span className="text-(--main-color)">
              $ {totalPrice.toFixed(2)}
            </span>
          </div>

          {/* زر فتح نافذة إدخال بيانات الطلب */}
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-(--main-color) text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg text-center cursor-pointer"
          >
            Checkout
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-(--main-color) text-sm font-semibold transition-colors mt-1"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>

      {/* إدخال بيانات الشحن */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fadeIn">
            {/* زر الإغلاق */}
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 text-red-600 hover:text-red-700 bg-red-300 p-2 rounded-full cursor-pointer transition-colors"
            >
              <FaTimes size={14} />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Shipping Details
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Please enter your shipping information to complete the order.
            </p>

            <form
              onSubmit={handleCheckoutSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={shippingData.fullName}
                  onChange={handleInputChange}
                  placeholder="Sabry Saleh"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={shippingData.phone}
                  onChange={handleInputChange}
                  placeholder="+20 123 456 7890"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingData.city}
                  onChange={handleInputChange}
                  placeholder="Cairo"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Street Address
                </label>
                <textarea
                  name="address"
                  value={shippingData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main Street, Apartment..."
                  rows="2"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color) resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 bg-(--main-color) text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                <FaCheckCircle /> Confirm Order ($ {totalPrice.toFixed(2)})
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
