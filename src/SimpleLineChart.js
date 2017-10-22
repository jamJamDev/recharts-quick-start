import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import data from './data.json';

class SimpleLineChart extends Component{
    render () {
        return (
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis dataKey="count"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        );
    }
}

export default SimpleLineChart;