import React from 'react'
import TopHeader from '@/components/header/TopHeader'
import BtmHeader from '@/components/header/BtmHeader'
import AppRoutes from './routes/router'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/components/ScrollToTop';

function App() {
  return <>

    {/* to Scroll to Top */}
    <ScrollToTop />
    <div>
      {/* رسالة عرض اضافة المنتج إلى السلة */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    
    <header className='sticky top-0 z-50'>
      <TopHeader />
      <BtmHeader />
    </header>
    <main>
      <AppRoutes/>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
}

export default App