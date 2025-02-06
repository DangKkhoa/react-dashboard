import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react'
import ProductTable from '../components/products/ProductTable.jsx'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart.jsx'
import SalesTrendChart from '../components/products/SalesTrendChart.jsx'

const Products = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto'>
      <Header title="Products" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        { /* STATS */ }
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Products" icon={Package} value="123" color="#6366F1"/>
          <StatCard name="Top Selling" icon={TrendingUp} value="32" color="#10B981"/>
          <StatCard name="Low Stock" icon={AlertTriangle} value="8" color="#ebc934"/>
          <StatCard name="Total Revenue" icon={DollarSign} value="$153,288" color="#ed61c8"/>
        </motion.div>
        
        <ProductTable />

        { /* CHARTS */ }
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        
        </div>
        
      </main>
    </div>
  )
}

export default Products