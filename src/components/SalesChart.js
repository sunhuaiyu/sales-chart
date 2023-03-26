import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesChart = () => {
  const data = useSelector((state) => state);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#4682b4" />
    </BarChart>
  );
};

export default SalesChart;
