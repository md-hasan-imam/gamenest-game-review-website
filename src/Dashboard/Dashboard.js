import React, { useEffect, useState } from 'react';
import {LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import Barchart from '../BarChart/Barchart';
import './Dashboard.css';


const Dashboard = () => {

    const [chartdata, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, [])

    const { month, investment, sell, revenue } = chartdata;

    return (
        <div className='barchart grid grid-cols-2 m-8 '>
            <div className='chart'>
                <BarChart width={600} height={400} data={chartdata}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='investment' stackId="a" fill="#1f2023" />
                    <Bar dataKey="revenue" stackId="a" fill="#FFC641" />
                </BarChart>
            </div>
            <div className='chart chart-2'>
                <LineChart
                    width={500}
                    height={300}
                    data={chartdata}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#040910" />
                    <Line type="monotone" dataKey="revenue" stroke="#FFC641" />
                </LineChart>
            </div>
            <div className='chart chart-2'>
            <LineChart
                    width={500}
                    height={300}
                    data={chartdata}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#001d3d"/>
                    <Line type="monotone" dataKey="sell" stroke="#040910" />
                    <Line type="monotone" dataKey="revenue" stroke="#FFC641" />
                </LineChart>
            </div>
            <div className='chart'>
            <BarChart width={600} height={400} data={chartdata}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='investment' stackId="a" fill="#14213d" />
                    <Bar dataKey="revenue" stackId="a" fill="#e5e5e5" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;