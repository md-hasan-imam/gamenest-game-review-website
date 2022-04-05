import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import './Barchart.css';


const Barchart = (props) => {

    const {month, investment,sell, revenue} =props.chartdata;

    return (
        <div>
            <div className='barchart'>
                <BarChart width={600} height={400} data={props.chartdata}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='investment' stackId="a" fill="#1f2023" />
                    <Bar dataKey="revenue" stackId="a" fill="#FFC641" />
                </BarChart>
            </div>
        </div>
    );
};

export default Barchart;