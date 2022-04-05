import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Barchart from '../BarChart/Barchart';
import './Dashboard.css';

const Dashboard = () => {

    const [chartdata, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, [])

    return (
        <div className='barchart grid grid-cols-2 m-8 '>
            <div className='chart'>
                <Barchart key={chartdata.month} chartdata={chartdata}></Barchart>
            </div>
            <div className='chart'>
                <Barchart key={chartdata.month} chartdata={chartdata}></Barchart>
            </div>
            <div className='chart'>
                <Barchart key={chartdata.month} chartdata={chartdata}></Barchart>
            </div>
            <div className='chart'>
                <Barchart key={chartdata.month} chartdata={chartdata}></Barchart>
            </div>
        </div>
    );
};

export default Dashboard;