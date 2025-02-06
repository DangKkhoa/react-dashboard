import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Overview from './pages/Overview.jsx'
import Products from './pages/Products.jsx'

import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 overflow-hidden text-gray-100'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Overview /> } />
        <Route path='/products' element={ <Products />} />
      </Routes>
    </div>
  )
}

export default App