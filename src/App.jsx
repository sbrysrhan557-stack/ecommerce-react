import React from 'react'
import TopHeader from '@/components/header/TopHeader'
import BtmHeader from '@/components/header/BtmHeader'
import Home from './pages/Home'

function App() {
  return <>
    <header>
      <TopHeader />
      <BtmHeader />
      <Home/>
    </header>
  </>
}

export default App