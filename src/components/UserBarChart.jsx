import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function UserBarChart({ userData }) {
  // Destructure the monthlyData from the userData prop
  const { monthlyData } = userData;

  // Value formatter function for the chart
  const valueFormatter = (value) => value;

  const chartSetting = {
    yAxis: [
      {
        label: 'Number of Users',
      },
    ],
    width: 600,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  return (
    <BarChart
      dataset={monthlyData}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'totalUsers', label: 'Total Users', valueFormatter, color: '#4CAF50' },
        { dataKey: 'activeUsers', label: 'Active Users', valueFormatter, color: 'blue' },
        { dataKey: 'inactiveUsers', label: 'Inactive Users', valueFormatter, color: '#f58700' },
      ]}
      {...chartSetting}
    />
  );
}
