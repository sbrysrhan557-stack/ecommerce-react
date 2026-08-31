import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductrDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* الصفحة الرئيسية */}
      <Route path="/" element={<Home />} />

      {/* صفحة تفاصيل المنتج - تم تعديل المسار ليتطابق مع Link في كارت المنتج */}
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* صفحة 404 عند عدم إيجاد المسار */}
      <Route
        path="*"
        element={
          <h1 className="text-center py-10 text-2xl font-bold">
            404 - Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
