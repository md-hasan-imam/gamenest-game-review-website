import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const [chartdata, setChartData] = useState([]);
    


    return (
        <div>
            <h2>This is Dashboard</h2>
            <BarChart></BarChart>
        </div>
    );
};

export default Dashboard;