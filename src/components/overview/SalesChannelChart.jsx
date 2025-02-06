import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const channelData = [
  { name: "Website", value: 45232 },
  { name: "Mobile App", value: 33289},
  { name: "Social Media", value: 52321},
  { name: "Marketplace", value: 9221}
]

const SalesChannelChart = () => {
  return (
    <motion.div
      className='bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 col-span-full'
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .6}}
    >

      <h2 className='text-lg font-medium text-gray-10 mb-4'>Sales by Channel</h2>
      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}> 
          <BarChart 
            data={channelData}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#485563"
              }}
              itemStyle={{ color: "#E5E7EB"}}
            />
            <Legend />
            <Bar dataKey={"value"} fill='#6366F1' />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </motion.div>
  )
}

export default SalesChannelChart