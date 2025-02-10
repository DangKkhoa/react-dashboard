import React from 'react'
import { LineChart, Line, XAxis, YAxis, Cell, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart
        data={data}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#485563'/>
        <XAxis dataKey={"name"} />
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
          dataKey={"value"}
          stroke="#6366F1"
          strokeWidth={2}
          dot={{ fill: "#6366F1", r: 4 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent