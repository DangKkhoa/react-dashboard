import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import LineChartComponent from '../common/LineChartComponent.jsx'

const salesData = [
  { name: "Jan", value: 4200 },
  { name: "Feb", value: 3800 },
  { name: "Mar", value: 2488 },
  { name: "Apr", value: 3412 },
  { name: "May", value: 4522 },
  { name: "Jun", value: 5100 },
  { name: "Jul", value: 6113 },
  { name: "Aug", value: 4893 },
  { name: "Sep", value: 3544 },
  { name: "Oct", value: 5333 },
  { name: "Nov", value: 4898 },
  { name: "Dec", value: 7621 },
]

const SalesOverviewChart = () => {
  return (
    <motion.div
      className='bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

      <div className='h-80'>
        {/* <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#485563' />
            <XAxis dataKey={"M"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#485563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
              <Line 
                type="monotone" 
                dataKey={"S"}
                stroke="#6366F1"
                strokeWidth={2}
                dot={{ fill: "#6366F1", r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
                />
          </LineChart>
        </ResponsiveContainer> */}
        <LineChartComponent data={salesData}/>
      </div>
    
    </motion.div>
  )
}

export default SalesOverviewChart