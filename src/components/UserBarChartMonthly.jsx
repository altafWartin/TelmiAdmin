import  React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { usersMonthlyDashboardData } from '../api/apiFunctions';

export default function UserBarChartMonthly({ selectedmonth }) {
    const [monthlyData, setMonthlyData] = useState([]); // State to hold monthly data
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        const fetchMonthlyData = async () => {
            try {
                const data = await usersMonthlyDashboardData(selectedmonth);
                console.log("Fetched monthly data:", data);
                setMonthlyData(data.dailyStats); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching monthly data:", error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchMonthlyData();
    }, [selectedmonth]); // Re-run the effect when selectedmonth changes

    // Value formatter function for the chart
    const valueFormatter = (value) => value;

    const chartSetting = {
        yAxis: [
            {
                label: 'Number of Users',
            },
        ],
        width: 650,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };

    // Show a loading indicator or an empty chart if still loading
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BarChart
            dataset={monthlyData}
            xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
            series={[
                { dataKey: 'totalUsers', label: 'Total Users', valueFormatter, color: '#4CAF50' },
                { dataKey: 'activeUsers', label: 'Active Users', valueFormatter, color: 'blue' },
                { dataKey: 'inactiveUsers', label: 'Inactive Users', valueFormatter, color: '#f58700' },
            ]}
            {...chartSetting}
        />
    );
}
    