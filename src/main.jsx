import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CardProvider from '@/components/context/CardContext'
import { WishlistProvider } from "@/components/context/WishlistContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CardProvider>
    </BrowserRouter>
  </StrictMode>,
)
