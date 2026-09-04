import React from 'react'

function SlideProductLoading() {
  return (
    <div className="slide-products slide py-5">
      <div className="container">
        {/* عنوان السكشن الوهمي */}
        <div className="top-slide relative mb-4 px-5 py-4 border-b border-gray-200">
          <div className="w-48 h-8 bg-gray-300 rounded-md animate-pulse mb-3"></div>
          <div className="w-72 h-4 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        {/* شبكة المنتجات الوهمية تمثيل لشكل الكروت داخل السلايدر */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl">
              {/* صورة المنتج */}
              <div className="w-full h-48 bg-gray-300 rounded-lg animate-pulse"></div>
              
              {/* اسم المنتج */}
              <div className="w-full h-6 bg-gray-300 rounded-md animate-pulse"></div>
              
              {/* التقييم */}
              <div className="w-20 h-4 bg-gray-300 rounded-md animate-pulse"></div>
              
              {/* السعر */}
              <div className="w-24 h-5 bg-gray-300 rounded-md animate-pulse"></div>
              
              {/* الأيقونات */}
              <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideProductLoading