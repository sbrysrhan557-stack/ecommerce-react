import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // دالة الإضافة والإزالة (Toggle) للمفضلة
  const toggleWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const isExists = prevItems.some((i) => i.id === item.id);
      if (isExists) {
        return prevItems.filter((i) => i.id !== item.id); // إزالة لو موجود
      } else {
        return [...prevItems, item]; // إضافة لو مش موجود
      }
    });
  };

  // حذف منتج معين
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;