import React from 'react'

export const CardContext = React.createContext()

export function CardProvider({ children }) {

  const [cardItems, setCardItems] = React.useState(() => {
    const savedCard = localStorage.getItem('cardItems')
    return savedCard ? JSON.parse(savedCard) : []
  })

  React.useEffect(() => {
    localStorage.setItem('cardItems', JSON.stringify(cardItems))
  }, [cardItems])

  // إضافة منتج أو زيادته
  const addToCard = (item) => {
    setCardItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // إذا كان موجوداً مسبقاً، نزود الكمية بمقدار 1
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        )
      }
      // إذا لم يكن موجوداً، نضيفه مع كمية تبدأ بـ 1
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  // تقليل كمية المنتج أو حذفه إذا وصلت الكمية إلى 1
  const decreaseQuantity = (id) => {
    setCardItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // حذف منتج معين بالكامل
  const removeFromCard = (id) => {
    setCardItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // حذف الكل
  const clearCart = () => {
    setCardItems([])
  }

  return (
    <CardContext.Provider value={{ cardItems, addToCard, decreaseQuantity, removeFromCard, clearCart }}>
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider