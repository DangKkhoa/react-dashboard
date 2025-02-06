import React from 'react'
import { motion } from 'framer-motion'

const ProductTable = () => {
  return (
    <motion.div
      className='bg-gray-800 mb-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: .2 }}
    >
      <table className='h-80'>

      </table>
    </motion.div>
  )
}

export default ProductTable