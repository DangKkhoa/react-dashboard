import React from 'react'

const Header = ({ title }) => {
  return (
    <header className='border-b border-gray-700 bg-gray-800 backdrop-blur-md shadow-lg '>
      <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
      </div>
    </header>
  )
}

export default Header