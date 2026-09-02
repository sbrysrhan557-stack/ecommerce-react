import React from 'react'

function ProductDetailsLoading() {
  return (
    <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* قسم معرض الصور (الجزء الأيسر) */}
            <div className="flex flex-col items-center gap-6">
              {/* الصورة الرئيسية */}
              <div className="w-full max-w-78.5 h-100 flex items-center justify-center p-4 rounded-xl shadow-md bg-gray-300 animate-pulse">

              </div>
    
              {/* الصور المصغرة Thumbnails */}
              <div className="flex gap-4">
                  <div className={`w-20 h-24 p-2 rounded-lg transition-all duration-200 bg-gray-300 animate-pulse`}>
                  </div>
                  <div className={`w-20 h-24 p-2 rounded-lg transition-all duration-200 bg-gray-300 animate-pulse`}>
                  </div>
                  <div className={`w-20 h-24 p-2 rounded-lg transition-all duration-200 bg-gray-300 animate-pulse`}>
                  </div>
              </div>
            </div>
    
            {/* قسم تفاصيل المنتج (الجزء الأيمن) */}
            <div className="flex flex-col gap-4 text-gray-700">
              <h1 className="w-full h-8 bg-gray-300 rounded-md animate-pulse">
              </h1>
    
              {/* التقييم */}
              <div className="flex items-center gap-1 bg-gray-300 rounded-md animate-pulse w-20 h-5">
              </div>
    
              {/* السعر */}
              <div className="w-full h-6 bg-gray-300 rounded-md animate-pulse"></div>
    
              {/* حالة التوفر والبراند */}
              <div className="flex flex-col gap-1 text-sm font-medium">
                <p className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></p>
                <p className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></p>
              </div>
    
              {/* الوصف */}
              <p className="w-full h-20 bg-gray-300 rounded-md animate-pulse"></p>
    
              {/* التنبيه بوجود كمية محدودة */}
              <p className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></p>

              {/* أزرار الإجراءات (الإضافة للسلة، المفضلة، المشاركة) */}
              <div className="flex flex-col gap-4 mt-4">
                <button className="w-50 h-10 bg-gray-300 rounded-md animate-pulse"></button>
    
                <div className="flex items-center gap-3">
                  <button
                    title="Add to Wishlist"
                    className="w-10 h-10 rounded-full bg-gray-300 animate-pulse">
                  </button>
                  <button
                    title="Share"
                    className="w-10 h-10 cursor-pointer rounded-full bg-gray-300 animate-pulse">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductDetailsLoading