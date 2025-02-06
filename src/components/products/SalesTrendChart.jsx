import React from 'react'
import { motion } from 'framer-motion'
import LineChartComponent from '../common/LineChartComponent.jsx'

const salesData = [
  { name: "Jan", value: 4200 },
  { name: "Feb", value: 3800 },
  { name: "Mar", value: 2488 },
  { name: "Apr", value: 3412 },
  { name: "May", value: 4522 },
  { name: "Jun", value: 5100 },
]

const SalesTrendChart = () => {
  return (
    <motion.div
      className='bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg'
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: .4}}
    >
    <h2 className='text-lg font-medium text-gray-100 mb-4'>Sales by Trend</h2>
    <div className='h-80'> 
      <LineChartComponent data={salesData} />
    </div>
    </motion.div>
  )
}

export default SalesTrendChart