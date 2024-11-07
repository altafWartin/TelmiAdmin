import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts'; // Import ECharts

// Function to calculate inactive users
const calculateInactiveUsers = (totalUsers, activeUsers) => {
  return totalUsers - activeUsers;
};

// Function to calculate percentage
const calculatePercentage = (value, total) => {
  return total > 0 ? ((value / total) * 100).toFixed(2) + '%' : '0%';
};

export default function ActiveInactiveUsersPieChart({ userData }) {
  // Calculate inactive users
  const inactiveUsers = calculateInactiveUsers(userData.totalUsers, userData.activeUsers);
  
  // Prepare user data for the pie chart
  const totalUsers = userData.totalUsers;
  const chartData = [
    { name: 'Active Users', value: userData.activeUsers },
    { name: 'Inactive Users', value: inactiveUsers },
  ];

  // Create a ref for the chart
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    // Set chart options for a simple donut chart
    chartInstance.setOption({
      title: {
     
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          const percentage = calculatePercentage(params.data.value, totalUsers);
          return `${params.data.name}: ${percentage}`;
        },
      },
      series: [
        {
          name: 'User Status',
          type: 'pie',
          radius: ['30%', '60%'], // Inner and outer radius for the donut effect
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#fff',
          },
        },
      ],
      color: ['blue', '#f58700'], // Colors for active and inactive users
    });

    // Cleanup the chart instance on component unmount
    return () => {
      chartInstance.dispose();
    };
  }, [chartData, totalUsers]); // Re-run when chartData or totalUsers changes

  return (
    <div ref={chartRef} style={{ width: '340px', height: '280px' }} />
  );
}
