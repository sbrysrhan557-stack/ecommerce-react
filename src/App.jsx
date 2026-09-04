import React from 'react'
import TopHeader from '@/components/header/TopHeader'
import BtmHeader from '@/components/header/BtmHeader'
import AppRoutes from './routes/router'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>

  <div>
      {/* رسالة عرض اضافة المنتج إلى السلة */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    
    <header className='sticky top-0 z-50 bg-(--white-color)'>
      <TopHeader />
      <BtmHeader />
    </header>
    <main>
      <AppRoutes/>
    </main>
  </>
}

export default App