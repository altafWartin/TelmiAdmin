import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { allHostedRoomsData } from "../api/apiFunctions"

export default function RoomsHostedBarChart() {
    const [hostedData, setHostedData] = useState([]);
    const [totalRoomsHosted, setTotalRoomsHosted] = useState("0");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHostedData = async () => {
            try {
                const sampleData = await allHostedRoomsData()
                setTotalRoomsHosted(sampleData.totalRoomsHosted)
                setHostedData(sampleData.monthlyData);
            } catch (error) {
                console.error("Error fetching hosted rooms data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHostedData();
    }, []);

    const chartSetting = {

        width: 500,
        height: 300,

    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Rooms Hosted : {totalRoomsHosted}</h2>
            <BarChart
                dataset={hostedData}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'roomsHosted', label: 'Rooms Hosted', color: '#FF7043' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}
