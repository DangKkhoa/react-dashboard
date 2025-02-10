import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const productData = [
  { id: 1, name: "Iphone 16 Pro Max", category: "Electronics", price: 1599, stock: 50, sold: 40 },
  { id: 2, name: "Coffe Maker", category: "Home", price: 200, stock: 15, sold: 30 },
  { id: 3, name: "Macbook Pro M4", category: "Electronics", price: 2099, stock: 100, sold: 28 },
  { id: 4, name: "Vacuum cleaner", category: "Electronics", price: 319, stock: 50, sold: 90 },
  { id: 5, name: "Dumbell", category: "Fitness", price: 30, stock: 120, sold: 290 },  
]

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, setSearchProducts] = useState(productData);

  const handleProductsSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term);
    const filteredProducts = productData.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
    setSearchProducts(filteredProducts);
  }

  return (
    <motion.div
      className='bg-gray-800 mb-6 shadow-lg rounded-xl p-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: .2 }}        
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-lg font-medium text-bg-100'>Products List</h2>
        <div className='relative'>
          <input 
            type="text" 
            placeholder='Search products...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchTerm}
            onChange={handleProductsSearch}
          />
          <Search size={24} className='absolute bottom-2 left-2'/>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <table 
          className='w-full  divide-y divide-gray-700 text-center '
        >
          <thead className=''>
            <tr className=''>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Id</th>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Name</th>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Category</th>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Price</th>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Stock</th>
              <th className='p-4  uppercase text-gray-400 font-medium tracking-wider'>Sold</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {searchProducts.map((product, id) => (
              <motion.tr key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .2 }}
              >
                <td className='p-4'>{product.id}</td>
                <td className='p-4'>{product.name}</td>
                <td className='p-4'>{product.category}</td>
                <td className='p-4'>${product.price}</td>
                <td className='p-4'>${product.stock}</td>
                <td className='p-4'>${product.sold}</td>
              </motion.tr>
            ))}
          
          </tbody>
        </table>  
      </div>
    </motion.div>
    
    
  )
}

export default ProductTable