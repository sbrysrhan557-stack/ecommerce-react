import React from "react";
import { useContext } from "react";
import { CardContext } from "@/components/context/CardContext";
import { Link } from "react-router";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShoppingBag,
  FaInfo,
} from "react-icons/fa";

function Cart() {
  const { cardItems, addToCard, decreaseQuantity, removeFromCard, clearCart } =
    useContext(CardContext);

  // حساب الإجمالي الكلي
  const totalPrice = cardItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  if (cardItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center gap-4">
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
          to="/"
          className="mt-4 bg-(--main-color) text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-semibold transition-colors bg-red-50 px-4 py-2 rounded-lg border border-red-200"
        >
          <FaTrash /> Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* قائمة المنتجات */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl border border-(--border-color) shadow-sm gap-4 transition-all hover:shadow-md"
            >
              <div className="flex items-start w-full sm:w-auto">
                <Link to={`/product/${item.id}`}>
                  <button
                    className="w-7 h-7 bg-(--main-color)/90 backdrop-blur-sm text-(--white-color) flex items-center justify-center rounded-full shadow-md transition-all duration-200 hover:bg-gray-800 hover:text-(--white-color) hover:scale-110"
                    title="View Product"
                  >
                    <FaInfo />
                  </button>
                </Link>
              </div>

              {/* صورة المنتج وعنوانه */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-xl  bg-gray-50 p-1"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-800 line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-(--main-color)] font-extrabold mt-1">
                    $ {item.price}
                  </span>
                </div>
              </div>

              {/* أزرار التحكم بالكمية */}
              <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-7 h-7 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <FaMinus size={10} />
                </button>
                <span className="font-bold text-gray-800 w-6 text-center">
                  {item.quantity || 1}
                </span>
                <button
                  onClick={() => addToCard(item)}
                  className="w-7 h-7 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <FaPlus size={10} />
                </button>
              </div>

              {/* السعر الإجمالي للمنتج الواحد والازالة */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                <span className="font-extrabold text-gray-800 text-lg">
                  $ {(item.price * (item.quantity || 1)).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCard(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  title="Delete product"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* صندوق الملخص (Order Summary) */}
        <div className="bg-white p-6 rounded-2xl border border-(--border-color) shadow-sm h-fit flex flex-col gap-6">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h3>

          <div className="flex justify-between items-center text-gray-600">
            <span>Number of Products:</span>
            <span className="font-bold text-gray-800">
              {cardItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}{" "}
              Product(s)
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-600">
            <span>Subtotal:</span>
            <span className="font-bold text-gray-800">
              $ {totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-600 border-b pb-4">
            <span>Shipping:</span>
            <span className="text-green-600 font-bold">Free</span>
          </div>

          <div className="flex justify-between items-center text-lg font-extrabold text-gray-800">
            <span>Total:</span>
            <span className="text-(--main-color)">
              $ {totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => alert("The order has been successfully completed!")}
            className="w-full bg-(--main-color) text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg text-center"
          >
            Checkout
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-(--main-color) text-sm font-semibold transition-colors mt-2"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
