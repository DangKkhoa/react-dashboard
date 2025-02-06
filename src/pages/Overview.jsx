import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'
import { Zap, Users, ShoppingBag, BarChart } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'

const Overview = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        { /* STATS */ }
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={Zap} value="$12,345" color="#6366F1"/>
          <StatCard name="Users" icon={Users} value="145" color="#10B981"/>
          <StatCard name="Total Products" icon={ShoppingBag} value="123" color="#ebc934"/>
          <StatCard name="Conversion Rate" icon={BarChart} value="12.5%" color="#ed61c8"/>
        </motion.div>

        { /* CHARTS */ }
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <SalesOverviewChart />
        <CategoryDistributionChart />
        <SalesChannelChart />
        </div>
        
      </main>
    </div>
  )
}

export default Overview