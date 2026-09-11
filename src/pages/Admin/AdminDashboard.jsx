import React, { useState, useEffect } from "react";
import { FaBox, FaShoppingCart, FaUsers, FaDollarSign, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

function AdminDashboard() {
  const navigate = useNavigate();

  // تفعيل التحقق من صلاحية الأدمن
  useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const [products, setProducts] = useState([
    { id: 1, title: "Modern Wireless Headphones", category: "Electronics", price: "$120", stock: "25" },
    { id: 2, title: "Minimalist Leather Watch", category: "Accessories", price: "$85", stock: "40" },
    { id: 3, title: "Ergonomic Office Chair", category: "Furniture", price: "$250", stock: "10" },
  ]);

  const [newProduct, setNewProduct] = useState({ title: "", category: "", price: "", stock: "" });
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price) return;
    
    const productToAdd = {
      id: Date.now(),
      title: newProduct.title,
      category: newProduct.category || "General",
      price: newProduct.price.startsWith("$") ? newProduct.price : `$${newProduct.price}`,
      stock: newProduct.stock || "10",
    };

    setProducts([productToAdd, ...products]);
    setNewProduct({ title: "", category: "", price: "", stock: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <span className="bg-rose-50 text-(--main-color) text-xs font-bold px-3 py-1 rounded-full border border-rose-100">
              Admin Panel
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              Dashboard Overview
            </h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-(--main-color) text-white font-bold py-2.5 px-6 rounded-2xl shadow-md hover:opacity-90 transition-all flex items-center gap-2 text-sm cursor-pointer"
          >
            <FaPlus />
            <span>Add New Product</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
              <FaDollarSign />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Total Revenue</p>
              <h3 className="text-xl font-black text-gray-900 mt-0.5">$24,500</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
              <FaShoppingCart />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Total Orders</p>
              <h3 className="text-xl font-black text-gray-900 mt-0.5">1,420</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
              <FaBox />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Products</p>
              <h3 className="text-xl font-black text-gray-900 mt-0.5">{products.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
              <FaUsers />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Customers</p>
              <h3 className="text-xl font-black text-gray-900 mt-0.5">3,850</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Manage Products</h2>
            <span className="text-xs text-gray-400 font-medium">{products.length} items listed</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase">
                  <th className="pb-4 font-bold">Product Title</th>
                  <th className="pb-4 font-bold">Category</th>
                  <th className="pb-4 font-bold">Price</th>
                  <th className="pb-4 font-bold">Stock</th>
                  <th className="pb-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-900">{product.title}</td>
                    <td className="py-4 text-gray-500">{product.category}</td>
                    <td className="py-4 font-semibold text-gray-800">{product.price}</td>
                    <td className="py-4 text-gray-500">
                      <span className="bg-gray-100 px-2.5 py-1 rounded-full text-xs font-bold text-gray-700">
                        {product.stock} left
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                        title="Delete Product"
                      >
                        <FaTrash size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Product</h3>
              
              <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Product Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Smart Watch"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    required
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-(--main-color)"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700">Category</label>
                  <input
                    type="text"
                    placeholder="e.g. Accessories"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-(--main-color)"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Price ($)</label>
                    <input
                      type="text"
                      placeholder="99"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      required
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-(--main-color)"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Stock</label>
                    <input
                      type="number"
                      placeholder="15"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-(--main-color)"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-gray-100 hover:bg-red-500 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-(--main-color) text-white hover:opacity-90 cursor-pointer shadow-md"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;