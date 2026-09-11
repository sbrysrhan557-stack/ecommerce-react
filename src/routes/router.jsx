import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/Product/ProductrDetails";
import Cart from "@/pages/Product/Cart";
import SearchResults from "@/pages/Product/SearchResults";
import Favorites from "@/pages/Product/Favorites";
import CategoryProducts from "@/pages/Product/CategoryProducts";
import NotFound from "@/components/components/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Accessories from "@/pages/Accessories";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Auth/login";
import Register from "@/pages/Auth/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* الصفحة الرئيسية */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/index" element={<Home />} />

      {/* صفحة حول الموقع */}
      <Route path='/admin' element={<AdminDashboard />} />

      {/* صفحة حول الموقع */}
      <Route path='/about' element={<About />} />

      <Route path="/accessories" element={<Accessories />} />

      {/* صفحة اتصل بنا */}
      <Route path="/contact" element={<Contact />} />

      {/* صفحة تفاصيل المنتج - تم تعديل المسار ليتطابق مع Link في كارت المنتج */}
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* صفحة سلة المشتريات */}
      <Route path="/cart" element={<Cart />} />

      {/* صفحة قائمة المفضلة */}
      <Route path="/favorites" element={<Favorites />} />

      {/* صفحة نتائج البحث */}
      <Route path="/search" element={<SearchResults />} />

      {/* صفحة منتجات التصنيف */}
      <Route path="/category/:slug" element={<CategoryProducts />} />

      {/* صفحة 404 عند عدم إيجاد المسار */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;
