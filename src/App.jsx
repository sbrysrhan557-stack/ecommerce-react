import React from 'react'
import TopHeader from '@/components/header/TopHeader'
import BtmHeader from '@/components/header/BtmHeader'
import AppRoutes from './routes/router'

function App() {
  return <>
    <header>
      <TopHeader />
      <BtmHeader />
    </header>
    <main>
      <AppRoutes/>
    </main>
  </>
}

export default App